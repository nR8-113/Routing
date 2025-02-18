import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Cast from './pages/Cast'
import Rating from './pages/Rating'
import About from './pages/About'
import welcome from './assets/welcome.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>MOVIE APP</h1>
     <div style={{width:'1300px'}}>
     <img src={welcome} width="500px"/>
     </div>
     <BrowserRouter>
     <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cast">Cast</Link></li>
        <li><Link to="/rating">Rating</Link></li>

      </ul>
     </nav>
     <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/cast" element={<Cast/>} />
      <Route path="/rating" element={<Rating/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
