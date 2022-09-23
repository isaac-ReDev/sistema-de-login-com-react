import { useContext, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Home } from './pages/home'
import { Privite } from './pages/privete/inde'
import './App.css'
import { RequireAuth } from './contexts/auth/RequireAuth'
import { AuthContext } from './contexts/auth/AuthContext'


function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
      await auth.signOut();
      navigate("/");
  };

  return (
    <div className="App">
      <header className="Header">
        <h1>Header do site</h1>
        <nav className='navbar'>
          <span className='itemNavbar'><Link to="/">Home</Link></span>
          <span className='itemNavbar'><Link to="/privite">Privite</Link></span> 
          {auth.user ? <span className='itemNavbar'><button onClick={handleLogOut} >Sair</button></span> : "" }
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route  path="/privite" element={ <RequireAuth><Privite /> </RequireAuth> } />
      </Routes>
    </div>
  )
}

export default App
