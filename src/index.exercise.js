// 🐨 you'll need to import react and createRoot from react-dom up here
import React from 'react'
import ReactDOM from 'react-dom'
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

// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
