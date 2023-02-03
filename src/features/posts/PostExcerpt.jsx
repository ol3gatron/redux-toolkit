import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostExcerpt = ({ post }) => {
  return (
    <article className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <PostAuthor userId={post.userId}/>
      <TimeAgo timestamp={post.date}/>
      <ReactionButtons post={post}/>
    </article>
  )
}
export default PostExcerpt