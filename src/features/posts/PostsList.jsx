import { useSelector } from "react-redux"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import { selectAllPosts } from "./postsSlice"
import ReactionButtons from "./ReactionButtons"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderPosts = orderedPosts.map(post => (
    <article className="post" key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <PostAuthor userId={post.userId}/>
      <TimeAgo timestamp={post.date}/>
      <ReactionButtons post={post}/>
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