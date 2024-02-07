
import React, { useState } from 'react';
import { Link} from 'react-router-dom'
const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'flex-end', // Align content at the top
        backgroundImage :'url(https://images.pexels.com/photos/339119/pexels-photo-339119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
      }}
    >
      {/* Left Half: Signup Form */}
      <div
        style={{
          flex: '1',
          maxWidth: '300px',
          padding: '70px',
          border: '1px solid #ccc',
          borderRadius: '10px 0 0 10px',
          boxShadow: '10 10 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          textAlign: 'center',
          marginBottom:'200px',
          marginTop:'1px',
          marginLeft:'-500px',
          opacity:'0.9',
          
          
        }}
      >
        <h2 style={{ color: '#333' }}>Create an Account</h2>
        <form style={{ marginTop: '20px',backgroundColor:'' }}>
          <label style={{ display: 'block', marginBottom: '10px', textAlign: 'left', color: '#555' }}>
            Username :
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '70%',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '15px',
              }}
              required
            />
          </label>

          <label style={{ display: 'block', marginBottom: '10px', textAlign: 'left', color: '#555' }}>
                  E----mail :   
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width:'67%',
                padding: '10px',
                boxSizing: 'content-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '15px',
              }}
              required
            />
          </label>

          <label style={{ display: 'block', marginBottom: '10px', textAlign: 'left', color: '#555' }}>
            Password :
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '70%',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '20px',
              }}
              required
            />
          </label>
<Link to='../Login'>
          <button
            type="button"
            onClick={handleSignup}
            style={{
              backgroundColor: '#3897f0',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
              fontSize: '16px',
            }}
          >
            Sign Up
          </button>
          </Link>
        </form>
      </div>

      {/* Right Half: Background Image */}
      <div
        style={{
          flex: '1',
          backgroundImage: 'url("https://www.epiqglobal.com/epiq/media/thinking/blog/chat-blog-angle.jpg?ext=.jpg")',
          backgroundSize: 'cover',
          borderRadius: '0 10px 10px 0',
          position: 'absolute',
          top: 40,
          right: 235,
          width: '40%',
          height: '80%',
       
          
        }}
      ><div>
        
      </div>

      </div>
    </div>
  );
};

export default SignupPage;





