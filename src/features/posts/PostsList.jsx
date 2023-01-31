import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const renderPosts = posts.map(post => (
    <article className="post" key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  ))

  return (
    <div>
      <h1 className="title">Posts</h1>
      {renderPosts}
    </div>
  )
}
export default PostsList