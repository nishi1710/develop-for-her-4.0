import { useNavigate } from 'react-router-dom';
import './login1.css'
import { useState } from 'react'




function Login() {
    const navigate = useNavigate();
 
      // const [name, setName] = useState("");
      // const [email, setEmail] = useState("");
      // // const [password , setPassword] = useState("");
      // const handleOnSubmit = async (e) => {
      //   e.preventDefault();
      //   let result = await fetch(
      //   'http://localhost:3000/register', {
      //     method: "post",
      //     body: JSON.stringify({ name, email }),
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   })
      //   result = await result.json();
      //   console.warn(result);
      //   if (result) {
      //     alert("Data saved succesfully");
      //     setEmail("");
      //     setName("");
      //     // setPassword("");
      //     navigate('/Learn')
      //   }}
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
          method: "post",
          body: JSON.stringify({ name, email }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
		}
    navigate('/Learn')
	}
      
  return (
    //  <div id = "background-login">

    //   <div id='side-text'>
    //     <p>
    //     Beware of<br></br> little <br></br>expenses.<br></br> A small <br></br>leak will <br></br>sink a <br></br>great ship.
    //     </p>
    //   </div>
     
    //  <div id='bigbox'>
    //     </div>
    //   <div id="welcome">
    //       <b>WELCOME BACK!!!</b>
    //   </div>
    //   <div id="email">
    //       <p>E-mail</p></div>
    //       <div id="email-box">
    //           <input type="text" id="text-box" placeholder="Enter e-mail id" value={email} onChange={(e) => setEmail(e.target.value)}></input>
    //       </div>
    //           <div id="password"><p>Password</p></div>

    //           <div id="password-box">
                  
    //                   <input type="password" id="pass-box" placeholder="Enter password" value={name} onChange={(e) => setName(e.target.value)}></input>
    //           </div>
    //   <div id="submit">
    //       <button type="submit" id="submit-btn-login"onClick={handleOnSubmit} >LOGIN</button>  
    //   </div>
    //   <div id='signup'><p id = "hello" onClick={() => navigate('/Sign')}>Don't have an account? Signup</p></div>
    // </div>
    <>
    <div id='login-bg'>
			<h1>LOGIN</h1>
			<form action="">
				<input type="text" id = 'name-login-text' placeholder="name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email" id='email-login-text'
				value={email} onChange={(e) => setEmail(e.target.value)} />
				<button type="submit" id='submit-form-btn'
				onClick={handleOnSubmit}>submit</button>
			</form>
      </div>

		</>
);
  }

export default Login;