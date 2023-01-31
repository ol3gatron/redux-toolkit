import './App.css'
import Counter from './features/counter/Counter'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'

const App = () => {
  return (
    <main>
      <PostsList />
      <AddPostForm />
    </main>
  )
}
export default App
