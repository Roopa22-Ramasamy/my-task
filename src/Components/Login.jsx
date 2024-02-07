
import React, { useState } from 'react';
import { Link} from 'react-router-dom'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (username && password) {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/535/789/206/new-smartphones-wallpaper-preview.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity:'1'
      }}
    >
      {loggedIn ? (
        <p style={{ fontSize: '90px', color: 'white' ,textAlign:'center',boxShadow:'10px 10px 5px 5px rgba(0, 0, 0, 0.5'}}>
          Welcome, {username}!
        </p>
      ) : (
        <form style={{ maxWidth: '350px', padding: '150px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '100px',opacity :'0.7' }}>
          <label style={{ display: 'block', marginBottom: '10px',color:'',fontSize:'20px'}}>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '15px' ,borderRadius: '100px'}}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px',fontSize:'20px' }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '15px' ,borderRadius:'100px'}}
            />
          </label>
          <br/>
          <Link to='/'>
          <button
            type="button"
            onClick={handleLogin}
            style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '21px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          </Link>
          <br/>
          <br/>

          <Link to='../Sign'>
            <button>
              <h4 align="center" style={{ color: '' }}>
                Don't Have An Account? SignUp
              </h4>
            </button>
          </Link>

        </form>
      )}
    </div>
  );
};

export default Login;
