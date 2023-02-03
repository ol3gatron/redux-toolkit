import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import { sub } from "date-fns"
import axios from "axios"

const POST_URL = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
  posts: [],
  status: "idle", // "idle", | "loading" | "succeeded" | "failed"
  error: null,
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const res = await axios.get(POST_URL)
    return res.data
  } catch (error) {
    return error.message
  }
})

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        }
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded"
        // Adding date and reactions
        let min = 1
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString()
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          }
          return post
        })

        state.posts = state.posts.concat(loadedPosts)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        ;(state.status = "failed"), (state.error = action.error.message)
      })
  },
})

export const selectAllPosts = (state) => state.posts.posts // Function that returns an actual data from slice's state so we don't need to manually change it in every component that uses that data
export const getPostStatus = (state) => state.posts.status
export const getPostError = (state) => state.posts.error

export const { postAdded, reactionAdded } = postsSlice.actions // Exporting action creator that generates automaticly

export default postsSlice.reducer
