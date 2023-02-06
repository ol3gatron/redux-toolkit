import { useSelector } from "react-redux"
import { selectPostById } from "./postsSlice"

import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const SinglePostPage = () => {
  // retrieve postId

  const post = useSelector((state) => selectPostById(state, postId)) // This selector retrieve two parameters: state for global state of our slice and postId for id of post that we need to load, post id comes from React Router Dom's params.

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  )
}
export default SinglePostPage