import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Products } from './pages/Products'
import { Layout } from './components/Layout'
import { Cart } from './pages/Cart'
import './App.css'
import { useState } from 'react'

function App() {

  const[cart, setCart] = useState([])

  return (
    <Router>
      <Routes>
        <Route element = {<Layout/>}> 
          <Route path = "/"         element = {<Home/>}/>
          <Route path = "/Products" element = {<Products cart={cart} setCart={setCart}/>}/>
          <Route path = "/About"    element = {<About/>}/>
          <Route path = "/Contact"  element = {<Contact/>}/>
          <Route path = "/Cart"     element = {<Cart cart={cart} setCart={setCart}/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
