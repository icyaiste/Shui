import { RouterProvider } from 'react-router-dom'
import './app.css'
import router from './router/Router.jsx'

export function App() {
  
  return (
    <main>
      <RouterProvider router= {router}/>
    </main>
  )
}

export default App