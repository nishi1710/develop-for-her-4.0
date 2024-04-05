// // // // // // // Home.js or any component where navigation occurs
// // // // // // import React from 'react';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // import Page1 from './Page1';

// // // // // // const Home = () => {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2>Home Page</h2>
// // // // // //       <button>
// // // // // //       <Link to="/Page1">Go to Page 1</Link></button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './accounts.css'

const Accounts = () => {
	const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // useEffect(() => {

    
    //     const fetchTransactions = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:5000/history/${email}`); // Replace ':email' with the actual email
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
    //             const data = await response.json();
    //             setTransactions(data);
    //             setLoading(false);
    //         } catch (error) {
    //             setError(error.message);
    //             setLoading(false);
    //         }
    //     };

    //     fetchTransactions();
    // }, []};
	return (
		<div id="background-image-acc">
            <div id="main-head">
                <p id="create-text">Welcome to your virtual bank account</p>
            </div>
            <div id="view-btn-money">
                <button id="view-money" onClick={() => navigate('/View')}>View money</button>
            </div>

            <div id="fd-btn">
                <button id="fd-money"  onClick={() => navigate('/FixedDeposit')}>Fixed deposit</button>
            </div>

            <div id="loan-btn">
                <button id="loan-money"  onClick={() => navigate('/Loan')}>Loans</button>
            </div>

        </div>
	);
};

export default Accounts;

// // // // // // Filename - App.js

// // // // // import { useState } from 'react'
// // // // // function Back() {
// // // // // 	const [name, setName] = useState("");
// // // // // 	const [email, setEmail] = useState("");
// // // // //     const [password , setPassword] = useState("");
// // // // // 	const handleOnSubmit = async (e) => {
// // // // // 		e.preventDefault();
// // // // // 		let result = await fetch(
// // // // // 		'http://localhost:5000/register', {
// // // // // 			method: "post",
// // // // // 			body: JSON.stringify({ name, email, password}),
// // // // // 			headers: {
// // // // // 				'Content-Type': 'application/json'
// // // // // 			}
// // // // // 		})
// // // // // 		result = await result.json();
// // // // // 		console.warn(result);
// // // // // 		if (result) {
// // // // // 			alert("Data saved succesfully");
// // // // // 			setEmail("");
// // // // // 			setName("");
// // // // //             setPassword("");
// // // // // 		}
// // // // // 	}
// // // // // 	return (
// // // // // 		<>
// // // // // 			<h1>This is React WebApp </h1>
// // // // // 			<form action="">
// // // // // 				<input type="text" placeholder="name"
// // // // // 				value={name} onChange={(e) => setName(e.target.value)} />
// // // // // 				<input type="email" placeholder="email"
// // // // // 				value={email} onChange={(e) => setEmail(e.target.value)} />
// // // // //                 <input type="text" placeholder="password"
// // // // // 				value={password} onChange={(e) => setPassword(e.target.value)} />
// // // // // 				<button type="submit"
// // // // // 				onClick={handleOnSubmit}>submit</button>
// // // // // 			</form>

// // // // // 		</>
// // // // // 	);
// // // // // }

// // // // // export default Back;


// // // // import { useState } from 'react';

// // // // function Back() {
// // // //   const [name, setName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");

// // // //   const handleOnSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     console.log(e.target.)
    
// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/register', {
// // // //         method: "POST",
// // // //         headers: {
// // // //           'Content-Type': 'application/json'
// // // //         },
// // // //         body: JSON.stringify({ name, email, password })
// // // //       });

// // // //       if (!response.ok) {
// // // //         throw new Error('Network response was not ok');
// // // //       }

// // // //       const result = await response.json();
// // // //       console.warn(result);

// // // //       if (result) {
// // // //         alert("Data saved successfully");
// // // //         setEmail("");
// // // //         setName("");
// // // //         setPassword("");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error during fetch:', error);
// // // //     }
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <h1>This is React WebApp </h1>
// // // //       <form>
// // // //         <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
// // // //         <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
// // // //         <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
// // // //         <button type="submit" onClick={handleOnSubmit}>submit</button>
// // // //       </form>
// // // //     </>
// // // //   );
// // // // }

// // // // export default Back;


// // // import { useState } from 'react';

// // // function Back() {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // //   const [registrationSuccess, setRegistrationSuccess] = useState(false); // Optional for conditional rendering

// // //   const handleOnSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await fetch('http://localhost:5000/register', {
// // //         method: "POST",
// // //         headers: {
// // //           'Content-Type': 'application/json'
// // //         },
// // //         body: JSON.stringify({ name, email })
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error('Network response was not ok');
// // //       }

// // //       const result = await response.json();
// // //       console.warn(result);

// // //       if (result) {
// // //         setRegistrationSuccess(true); // Optional for conditional rendering
// // //         alert("Data saved successfully");
// // //         setEmail("");
// // //         setName("");
// // //         // setPassword("");
// // //       }
// // //     } catch (error) {
// // //       console.error('Error during fetch:', error);
// // //       // Handle errors gracefully (e.g., display user-friendly message)
// // //     }
// // //   }

// // //   return (
// // //     <>
// // //       <h1>This is React WebApp </h1>
// // //       <form onSubmit={handleOnSubmit}>
// // //         <input type="password" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
// // //         <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
// // //         {/* <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
// // //         <button type="submit">submit</button>
// // //       </form>
// // //       {registrationSuccess && <p>Registration successful!</p>}  // Optional for conditional rendering
// // //     </>
// // //   );
// // // }

// // // export default Back;




// import React, { useState, useEffect } from 'react';

// const Accounts = () => {
//     const [transactions, setTransactions] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [email, setEmail] = useState(null);
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };
//     const getAccountValue = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/account/${email}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             const intValue = parseInt(data.accountValue); // Convert account value to integer
//             setAccountValue(intValue);
//             setError(null);
//         } catch (error) {
//             console.error('Error fetching account value:', error);
//             setAccountValue(null);
//             setError('Error fetching account value');
//         }
//     };

//     useEffect(() => {
//         const fetchTransactions = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/history/${email}`); // Replace ':email' with the actual email
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const data = await response.json();
//                 setTransactions(data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchTransactions();
//     }, []);

//     return (
//         <div>
//             <p>Enter Email ID to view Virtual Account balance:  <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> <button onClick={getAccountValue}>Get Account Value</button></p>
//                 {/* <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> */}
//                 {/* <button onClick={getAccountValue}>Get Account Value</button> */}
                
//                 {error && <p>Error: {error}</p>}
//             {loading && <p>Loading...</p>}
//             {error && <p>Error: {error}</p>}
//             {!loading && !error && (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Account Value</th>
//                             <th>Update Date</th>
//                             <th>Update Type</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {transactions.map((transaction, index) => (
//                             <tr key={index}>
//                                 <td>{transaction.accountValue}</td>
//                                 <td>{transaction.updateDate}</td>
//                                 <td>{transaction.updateType}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Accounts;