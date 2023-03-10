import { useSelector } from "react-redux"
import { selectAllPosts, getPostStatus, getPostError } from "./postsSlice"
import PostExcerpt from "./PostExcerpt"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostStatus)
  const error = useSelector(getPostError)

  let content;
    if (postsStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostExcerpt key={post.id} post={post} />)
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>;
    }

  return (
    <div>
      {content}
    </div>
  )
}
export default PostsList