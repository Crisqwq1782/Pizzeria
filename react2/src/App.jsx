import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Description from './components/Description'
import { useState } from 'react'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Cart from './components/Cart'
import Pizza from './components/Pizza'
function App() {
  return (
    <>
      <NavBar />
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
       {/*<Home /> */}
       {/*<Cart /> */}
        <Pizza />
      {/* <Description text="Este es un ejemplo de descripción." /> */} 
      <Footer />
    </>
  )
}

export default App
