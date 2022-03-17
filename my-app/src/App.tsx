import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-6xl mx-auto'>
      <Header /> 
      <main>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/product' element={<h1>Product</h1>}></Route>
          <Route path='/about' element={<h1>Product</h1>}></Route> 
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
