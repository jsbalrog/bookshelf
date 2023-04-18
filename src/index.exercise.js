import React from 'react'
import ReactDOM from 'react-dom/client'
import {Logo} from './components/logo'

const App = () => {
  return (
    <div>
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={() => alert('login')}>Login</button>
      <button onClick={() => alert('register')}>Register</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)