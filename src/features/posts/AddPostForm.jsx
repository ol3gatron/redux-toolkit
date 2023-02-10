import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addNewPost } from "./postsSlice"

import { selectAllUsers } from "../users/usersSlice"
import { useNavigate } from "react-router"

const AddPostForm = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("")
  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const users = useSelector(selectAllUsers)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)
  const onAuthorChange = (e) => setUserId(e.target.value)

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === "idle"

  const onSubmit = (e) => {
    e.preventDefault()

    if (canSave) {
      try {
        setAddRequestStatus("pending")
        dispatch(addNewPost({ title, body: content, userId })).unwrap()

        setTitle("")
        setContent("")
        setUserId("")
        navigate("/")
      } catch (error) {
        console.error("Failed to save post", error)
      } finally {
        setAddRequestStatus("idle")
      }
    }
  }


  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a new post</h2>
      <form onSubmit={onSubmit}>

        <label htmlFor="postAuthor">Author:</label>
        <select
          name="postAuthor"
          id="postAuthor"
          value={userId}
          onChange={onAuthorChange}
        >
          <option value=""></option>
          {userOptions}
        </select>

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

        <button disabled={!canSave}>Save Post</button>
      </form>
    </section>
  )
}
export default AddPostForm