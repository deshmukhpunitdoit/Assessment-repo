// src/App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [websites, setWebsites] = useState([])
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [search, setSearch] = useState('')
  const [showPasswords, setShowPasswords] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (website && username && password) {
      const newWebsite = {
        id: Date.now(),
        website,
        username,
        password
      }
      setWebsites([...websites, newWebsite])
      setWebsite('')
      setUsername('')
      setPassword('')
    }
  }

  const filteredWebsites = websites.filter(item =>
    item.website.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="app">
      <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" width= "200px" alt="app logo" />

        <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
           
          />
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <br></br>
        <div>
          <img className='img1' width= "350px" src='https://media.istockphoto.com/id/1490661442/vector/create-new-password-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=SUj3stazjz7NI6lX5B7qaoZl6p-z2ynX7RSPwMrBG-U=' alt="app logo" />
        </div>
      </div>
      {/* https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png */}

      <div className="search-container">
        <input
        
          type="text"
          placeholder="Search Passwords"
          value={search}
          onChange={(e) => setSearch(e.target.value)}

        />
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          id="showPasswords"
          checked={showPasswords}
          onChange={() => setShowPasswords(!showPasswords)}
        />
        
        <label htmlFor="showPasswords">Show Passwords</label>
      </div>

      <div className="passwords-container">
        {filteredWebsites.length === 0 ? (
          <div className="no-passwords">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p>No Passwords</p>
          </div>
        ) : (
          <ul>
            {filteredWebsites.map(item => (
              <li key={item.id}>
                <div className="password-item">
                  <div className="initial">
                    {item.website[0].toUpperCase()}
                  </div>
                  <div className="details">
                    <p>{item.website}</p>
                    <p>{item.username}</p>
                    <p>
                      {showPasswords ? item.password : '••••••••'}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  )
}

export default App