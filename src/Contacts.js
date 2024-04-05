import React from 'react';
import './contactus.css'

function Contacts() {
  return (
    <div id = "cubackground">
        <div id="conusimg">
           <img src='amico-contact.png' alt='not found'></img>
        </div>
        <div id='shadow-contact'></div>
        <div id="conus">Contact Us</div>
        <div id="name">Name:</div>
        <div id="name-box"><input type="text" id="text-box" placeholder="Enter Name"></input></div>
        <div id="email-con">E-mail:</div>
        <div id="email-box-cont"><input type="text" id="text-boxes" placeholder="Enter e-mail id"></input></div>
        <div id="text">What can we help you with?</div>
        <div id="submit-contact">
          <button type="submit" id="submit-btn-contact">SUBMIT</button>  
      </div>
      <div id="textarea-contact"><textarea rows={5} cols={60}></textarea></div>
    </div>
   
  );
}

export default Contacts;