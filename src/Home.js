import React from 'react'
import './landing.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
  
  return (
    <div id='background-land'>
        <div id='side-image'>
            <img src='amico_1.png' alt='not availablel' width={400} height={400}></img>
        </div>
        <div id='main-text'>
            <p>Join us here to learn more about taxes</p>
            <p>investments , cashflow , funds , financial statements</p>
            <p>shares and many more</p>
        </div>

        <div id='login-button'>
            <button id='login'onClick = {() => navigate("/Login")} >LOGIN</button> 
        </div>

    </div>
  )
}
