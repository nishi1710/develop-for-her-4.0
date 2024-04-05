import React from 'react';
import './sign.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Sign() {


  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:3000/register', {
        method: 'post',
        body: JSON.stringify({ name, email, age, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!result.ok) {
        throw new Error(`Server responded with status ${result.status}`);
      }

      const data = await result.json();
      console.warn(data);
      alert('Data saved successfully');
      setEmail('');
      setName('');
      setPassword('');
      setAge('');
      navigate('/Learn');
    } catch (error) {
      console.error('Error during fetch:', error);
      // Handle the error as needed, show a message, etc.
    }
  };
  return (
    <div id = "background"> 
        <div id='shadow'> </div>
        <div id='header'><b>Create Account</b></div>
        <div id='username-sign'><b>Username</b></div>
        <div id="username-sign-box"><input type="text" id="text-box" placeholder="Enter username" required value={name} onChange={(e) => setName(e.target.value)}></input></div>
        <div id='password-sign'><b>Password</b></div>
        <div id="password-sign-box"><input type="password-sign" id="pass-box" placeholder="Enter password-sign" required value={password} onChange={(e) => setPassword(e.target.value)}></input></div>
        <div id='age'><b>Age</b></div>
        <div id="age-box"><input type="number" placeholder="Enter Age" min={13} max={110} required value={age} onChange={(e) => setAge(e.target.value)}></input></div>
        <div id='phoneno'><b>Email address</b></div>
        <div id="phoneno-box"><input type="email" id="phone"  placeholder="Enter email id" required value={email} onChange={(e) => setEmail(e.target.value)}></input></div>
        <div id="signin">
            <button type="submit" id="signin-btn" onClick={handleOnSubmit}>SIGN IN</button>  
        </div>
    </div>
   
  );
}

export default Sign;