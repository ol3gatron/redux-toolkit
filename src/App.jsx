import './App.css'
import Counter from './features/counter/Counter'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'

const App = () => {
  return (
    <main>
      <AddPostForm />
      <PostsList />
    </main>
  )
}
export default App
