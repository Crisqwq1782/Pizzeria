import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="routes-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
