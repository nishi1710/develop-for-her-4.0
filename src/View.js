// import React from 'react'
// import { useState } from 'react';
// import './view.css'

// export default function View() {
    
//     const [email, setEmail] = useState('');
//     const [accountValue, setAccountValue] = useState(0);
//     const [error, setError] = useState(null);
//     const [type , setType] = useState(null);

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     // const getAccountValue = async () => {
//     //     try {
//     //         const response = await fetch(`http://localhost:5000/account/${email}`);
//     //         if (!response.ok) {
//     //             throw new Error('Network response was not ok');
//     //         }
//     //         const data = await response.json();
//     //         const intValue = parseInt(data.accountValue); // Convert account value to integer
//     //         setAccountValue(intValue);
//     //         setError(null);
//     //     } catch (error) {
//     //         console.error('Error fetching account value:', error);
//     //         setAccountValue(null);
//     //         setError('Error fetching account value');
//     //     }
//     // };

//     const updatetable = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/history/${email}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             const intValue = parseInt(data.accountValue); // Convert account value to integer
//             console.log(data.int)
//             const typeValue=data.updateType;
//             const dateValue=data.updateDate;

//             setAccountValue(intValue);
//             setType(typeValue)
//             setError(null);
//         } catch (error) {
//             console.error('Error fetching account value:', error);
//             setAccountValue(null);
//             setError('Error fetching account value');
//         }
//     };
//   return (
//     <div id='view-bg'>
//         {/* <p>Enter Email ID to view Virtual Account balance:  <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> <button onClick={getAccountValue}>Get Account Value</button></p>
//         {/* <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> */}
        
//         <div id='header-text-title'>
//             <h1>View your balance</h1>
//         </div>
//         <div id='enter-email'>
//             <p id='email-view-text'>Enter email: </p>
//         </div>      
//         <div id='email-view-box'>
//             <input type = 'email' onChange={handleEmailChange} value={email}></input>
//         </div>

//         <div id='view-btn'>
//             <button id='view-btn-id' onClick={updatetable}>View</button>
//         </div>
//         <div id='value-money'>
//         {accountValue && <p>Account Value: {type}</p>}
//         {/* {error && <p>Error: {error}</p>} */}
//         </div>


//     </div>
//   )
// }

import React from 'react'
import { useState } from 'react';
import './view.css'

export default function View() {
    
    const [email, setEmail] = useState('');
    const [accountValue, setAccountValue] = useState(0);
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const getAccountValue = async () => {
        // try {
        //     const response = await fetch(http://localhost:5000/account/${email});
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     const data = await response.json();
        //     const intValue = parseInt(data.accountValue); // Convert account value to integer
        //     setAccountValue(intValue);
        //     setError(null);
        // } catch (error) {
        //     console.error('Error fetching account value:', error);
        //     setAccountValue(null);
        //     setError('Error fetching account value');
        // }
       
    };
  return (
    <div id='view-bg'>
        {/* <p>Enter Email ID to view Virtual Account balance:  <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> <button onClick={getAccountValue}>Get Account Value</button></p>
        {/* <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> */}
        
        <div id='header-text-title'>
           <p id='para-text'>View your bank account</p>
        </div>
        <div id='enter-email'>
            <p id='email-view-text'>Enter email: </p>
        </div>      
        <div id='email-view-box'>
            <input type='email' onChange={handleEmailChange} value={email}></input>
        </div>

        <div id='view-btn'>
            <button id='view-btn-id'>View</button>
        </div>
        <div id='value-money'>
        {accountValue && <p>Account Value: {accountValue}</p>}
        {/* {error && <p>Error: {error}</p>} */}
        
        <div id="Table">
        <table align="center" border={""} >
        <tr>
            <th>Updated Amount</th>
            <th>Type of Deposit</th>
            <th style={{paddingLeft:"50px", paddingRight:"50px"}}>Date</th>
		</tr>
		<tr align="center">
			<td></td>
			<td></td>
			<td></td>
		</tr>
        <tr align="center">
			<td></td>
			<td></td>
			<td></td>
		</tr>
        <tr align="center">
			<td></td>
			<td></td>
			<td></td>
		</tr>
        <tr align="center">
			<td></td>
			<td></td>
			<td></td>
		</tr>
        </table>
        </div>
        
        </div>
        
    </div>
  )
}
