import { useState } from "react"
import { useDispatch } from "react-redux"
import { postAdded } from "./postsSlice"
import { nanoid } from "@reduxjs/toolkit"

const AddPostForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const dispatch = useDispatch()

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()

    if (title && content) {
      dispatch(postAdded(title, content))

      setTitle("")
      setContent("")
    }
  }

  return (
    <section>
      <h2>Add a new post</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="postContent">Content:</label>
        <textarea
          type="text"
          id="postContent"
          name="postTitle"
          value={content}
          onChange={onContentChange}
        />

        <button>Save Post</button>
      </form>
    </section>
  )
}
export default AddPostForm