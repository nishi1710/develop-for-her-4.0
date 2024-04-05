// import { useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import * as math from 'mathjs';
// import './FD_style.css'
// import FD_img from './FD_img.jpeg'


// const FixedDeposit = () => {
//   const [principalAmount, setprincipalAmount] = useState(10000);
//   const [interestRate, setinterestRate] = useState(10);
//   const [timePeriod, settimePeriod] = useState(5);
//   const [result, setResult] = useState(0);
//   const [totalInterest, setTotalInterest] = useState(0);
//   const [inputValue1, setInputValue1] = useState(0);
//   const [inputValue2, setInputValue2] = useState(0);
//   const [inputValue3, setInputValue3] = useState(0);
//   const [correctAnswer1, setCorrectAnswer1] = useState("");
//   const [correctAnswer2, setCorrectAnswer2] = useState("");
//   const [correctAnswer3, setCorrectAnswer3] = useState("");
//   const [correct, setCorrect] = useState(0);
//   const [compoundingPeriod, setCompoundingPeriod] = useState('yearly');
//   const [email, setEmail] = useState('');
//   const [accountValue, setAccountValue] = useState(0);
//   const [error, setError] = useState(null);
//   const [newBalance, setNewBalance] = useState('');
//   const [message, setMessage] = useState('');
//   const [type,setType]= useState('');
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
// };
// const updateHistory = async (e) => {
//   e.preventDefault();
//   let result = await fetch(
//   'http://localhost:5000/history', {
//     method: "post",
//     body: JSON.stringify({ email,newBalance,type }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   result = await result.json();
//   console.warn(result);
//   if (result) {
//     alert("Data saved succesfully");
//     setEmail("");
//     setNewBalance("");
//           setType("");
//   }
// }
//   const getAccountValue = async () => {
//     try {
//         const response = await fetch(`http://localhost:5000/account/${email}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         const intValue = parseInt(data.accountValue); // Convert account value to integer
//         setAccountValue(intValue);
//         setError(null);
//     } catch (error) {
//         console.error('Error fetching account value:', error);
//         setAccountValue(null);
//         setError('Error fetching account value');
//     }
// };
//   const handleSlider1Change = (event) => {
//     const value = parseFloat(event.target.value);
//     setprincipalAmount(value);
//   };

  

//   const handleSlider2Change = (event) => {
//     const value = parseFloat(event.target.value);
//     setinterestRate(value);
//   };

//   const handleSlider3Change = (event) => {
//     const value = parseFloat(event.target.value);
//     settimePeriod(value);
//   };

//   const handleCompoundingPeriodChange = (event) => {
//     const value = event.target.value;
//     setCompoundingPeriod(value);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'inputValue1') setInputValue1(value);
//     else if (name === 'inputValue2') setInputValue2(value);
//     else if (name === 'inputValue3') setInputValue3(value);
//   };
  
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     var count = 0;
//     if(inputValue1 == 57881.25){
//       count++
//       setCorrectAnswer1("Q1 ")
//     }
//     if(inputValue2 == 114888.18){
//       count++
//       setCorrectAnswer2("Q2 ")
//     }
//     if(inputValue3 == 27058.05){
//       count++
//       setCorrectAnswer3("Q3 ")
//     }
//     setCorrect(count)
//   };
//   const handleAddClick = () => {
//     var n;
//     // Perform fixed deposit calculation
//     switch (compoundingPeriod) {
//         case 'monthly':
//             n = 12;
//             break;
//         case 'quarterly':
//             n = 4;
//             break;
//         case 'halfYearly':
//             n = 2;
//             break;
//         case 'yearly':
//         default:
//             n = 1;
//             break;
//       }

      
//     const interestRatePercentage = math.divide(interestRate, math.multiply(n,100));
//     const ans = math.pow(math.add(1, interestRatePercentage), math.multiply(n,timePeriod));
//     const finalAmount = math.multiply(principalAmount, ans).toFixed(2);
//     const totalInterest = math.subtract(finalAmount, principalAmount);
//     setResult(finalAmount);
//     setTotalInterest(totalInterest.toFixed(2));
//     const type="FD"
//     setType(type)
//     const newBalance = math.add(totalInterest, accountValue);
//     setNewBalance(newBalance);
//   };
//   const updateBalance = async () => {
//     try {
//         const response = await fetch(`http://localhost:5000/account/${email}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ newBalance: parseFloat(newBalance) }),
//         });
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setMessage(data.message);
//         setError('');
//     } catch (error) {
//         console.error('Error updating balance:', error);
//         setMessage('');
//         setError('Error updating balance');
//     }
// };
// 	return (
// 	<div id ="fdbackground">
// 			  <div className='main'>
//         <br></br>
//         <br></br>
//         <br></br>
//         <h1 >Fixed Deposit</h1>
//         <div className="fixed-deposit-explanation">
//         <div>
//             <p>
//         Here's an explanation on how Fixed Deposit works: <br />
//         For example, if a bank offers 8% p.a. for a 3-year deposit where the interest is compounded annually. <br />
//         So, if you invest INR 10,000, we can calculate the interest as given below:
//       </p>
//       <br />
//       </div>
//        <img src={FD_img} height={300} width={300}></img>
            
//               <div id="tab">
//                   <table>
//                       <thead>
//                           <tr>
//                               <th>Year</th>
//                               <th>Principal Amount</th>
//                               <th>Calculation</th>
//                               <th>Interest Earned</th>
//                           </tr>
//                       </thead>
//                       <tbody>
//                           <tr>
//                               <td>1 year</td>
//                               <td>10,000</td>
//                               <td>10,000 x 8 x 1/100</td>
//                               <td>800</td>
//                           </tr>
//                           <tr>
//                               <td>2 year</td>
//                               <td>10,800</td>
//                               <td>10,800 x 8 x 1/100</td>
//                               <td>864</td>
//                           </tr>
//                           <tr>
//                               <td>3 year</td>
//                               <td>11,664</td>
//                               <td>11,664 x 8 x 1/100</td>
//                               <td>933.12</td>
//                           </tr>
//                       </tbody>
//                   </table>
//                   </div>
     
//     </div>
//     <br />
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <br></br>
//     <hr></hr>
//     <h3>
//         Let's try to apply with our understanding of Fixed Deposit to get the Target Amount:<br />
//       </h3>
//       <p>Question 1 : </p>
//       <p>If you invest ₹50,000 in a fixed deposit with an interest rate of 5% per annum compounded annually</p> 
//       <p> for 3 years, what is the maturity amount?</p>
//       <div id="q1"> <input type="number" name="inputValue1" value={inputValue1} onChange={handleChange}  id="Q"></input> </div>
//       <p>Question 2 : </p>
//       <p>A fixed deposit offers an interest rate of 7% per annum, compounded quarterly. If you invest </p>
//       <p>₹1,00,000 for 2 years, what is the maturity amount?</p>
//       <input type="number" name="inputValue2"  value={inputValue2} onChange={handleChange}  id="Q"></input>
//       <p>Question 3 : </p>
//       <p>What is the total interest earned if you deposit ₹80,000 in a fixed deposit with an interest</p>
//       <p>rate of 6% per annum, compounded semi-annually for 5 years?</p>
//       <input type="number" name="inputValue3"  value={inputValue3} onChange={handleChange}  id="Q"></input>
//       <div id="submit">
//                 <button type="submit" id="submit_btn" onClick={handleSubmit}>Submit</button> 
//         </div>
      
//       {correct !== 0 && (
//         <div>
//           <br></br>
//         <b>{correct}/3 answered correctly</b><br></br>
//         <b>Correct answers are: {correctAnswer1} {correctAnswer2} {correctAnswer3}</b>
//         </div>
//       )}
//       <div className="calculator">
//        <div className="input-group">
//             <label htmlFor="slider">Principal Amount: {principalAmount}</label><br/>
//             <input
//                 type="range"
//                 id="slider"
//                 min={1000}
//                 max={100000}
//                 step={500}
//                 value={principalAmount}
//                 onChange={handleSlider1Change}
//             />
//         </div>
//         <div>
//             <label htmlFor="slider">Rate of interest (p.a): {interestRate} %</label><br/>
//             <input
//                 type="range"
//                 id="slider"
//                 min={1}
//                 max={15}
//                 step={0.1}
//                 value={interestRate}
//                 onChange={handleSlider2Change}
//             />
//         </div>
//         <div className="input-group">
//             <label htmlFor="slider">Time Period: {timePeriod} years</label><br/>
//             <input
//                 type="range"
//                 id="slider"
//                 min={1}
//                 max={25}
//                 value={timePeriod}
//                 onChange={handleSlider3Change}
//             />
//         </div>
//         <div className="input-group">
//             <label htmlFor="compoundingPeriod">Compounding Period:</label>
//             <select id="compoundingPeriod" onChange={handleCompoundingPeriodChange} value={compoundingPeriod}>
//             <option value="yearly">Yearly</option>
//             <option value="monthly">Monthly</option>
//             <option value="quarterly">Quarterly</option>
//             <option value="halfYearly">Half Yearly</option>
//             </select>
//         </div>
//       <button onClick={handleAddClick}>Calculate</button>
//       {result !== 0 && (
//         <div>
//           <p>Total Amount: {result}</p>
//           <p>Interest: {totalInterest}</p>
//         </div>
//       )}
    
//     </div>
//     </div>
//     <hr></hr>
//             <div>
//                 <p>Enter Email ID to view Virtual Account balance:  <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> <button onClick={getAccountValue}>Get Account Value</button></p>
//                 {/* <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> */}
//                 {/* <button onClick={getAccountValue}>Get Account Value</button> */}
//                 {accountValue && <p>Account Value: {accountValue}</p>}
//                 {error && <p>Error: {error}</p>}

//             </div>
//             <div>
//                 <button onClick={updateBalance}>Update Balance</button>
//                 {message && <p>{message}</p>}

//             </div>
//             <div>
//             <button onClick={updateHistory}  >Update History</button>

//             </div>
// 	</div>
// 	);
// };

// export default FixedDeposit;

import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import * as math from 'mathjs';
import './FD_style.css'
import FD_img from './FD_img.jpeg'


const FixedDeposit = () => {
  const [principalAmount, setprincipalAmount] = useState(10000);
  const [interestRate, setinterestRate] = useState(10);
  const [timePeriod, settimePeriod] = useState(5);
  const [result, setResult] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [inputValue3, setInputValue3] = useState(0);
  const [correctAnswer1, setCorrectAnswer1] = useState("");
  const [correctAnswer2, setCorrectAnswer2] = useState("");
  const [correctAnswer3, setCorrectAnswer3] = useState("");
  const [correct, setCorrect] = useState(0);
  const [compoundingPeriod, setCompoundingPeriod] = useState('yearly');
  const [email, setEmail] = useState('');
  const [accountValue, setAccountValue] = useState(0);
  const [error, setError] = useState(null);
  const [newBalance, setNewBalance] = useState('');
  const [message, setMessage] = useState('');
  const [type,setType]= useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
};

const updateHistory = async (e) => {
  e.preventDefault();
  let result = await fetch(
  'http://localhost:5000/history', {
    method: "post",
    body: JSON.stringify({ email,newBalance,type }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  result = await result.json();
  console.warn(result);
  if (result) {
    alert("Data saved succesfully");
    setEmail("");
    setNewBalance("");
          setType("");
  }
}
  const getAccountValue = async () => {
    try {
        const response = await fetch(`http://localhost:5000/account/${email}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const intValue = parseInt(data.accountValue); // Convert account value to integer
        setAccountValue(intValue);
        setError(null);
    } catch (error) {
        console.error('Error fetching account value:', error);
        setAccountValue(null);
        setError('Error fetching account value');
    }
};

  const handleSlider1Change = (event) => {
    const value = parseFloat(event.target.value);
    setprincipalAmount(value);
  };

  const handleSlider2Change = (event) => {
    const value = parseFloat(event.target.value);
    setinterestRate(value);
  };

  const handleSlider3Change = (event) => {
    const value = parseFloat(event.target.value);
    settimePeriod(value);
  };

  const handleCompoundingPeriodChange = (event) => {
    const value = event.target.value;
    setCompoundingPeriod(value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'inputValue1') setInputValue1(value);
    else if (name === 'inputValue2') setInputValue2(value);
    else if (name === 'inputValue3') setInputValue3(value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    var count = 0;
    if(inputValue1 == 57881.25){
      count++
      setCorrectAnswer1("Q1 ")
    }
    if(inputValue2 == 114888.18){
      count++
      setCorrectAnswer2("Q2 ")
    }
    if(inputValue3 == 27058.05){
      count++
      setCorrectAnswer3("Q3 ")
    }
    setCorrect(count)
  };
  const handleAddClick = () => {
    var n;
    // Perform fixed deposit calculation
    switch (compoundingPeriod) {
        case 'monthly':
            n = 12;
            break;
        case 'quarterly':
            n = 4;
            break;
        case 'halfYearly':
            n = 2;
            break;
        case 'yearly':
        default:
            n = 1;
            break;
      }
    const interestRatePercentage = math.divide(interestRate, math.multiply(n,100));
    const ans = math.pow(math.add(1, interestRatePercentage), math.multiply(n,timePeriod));
    const finalAmount = math.multiply(principalAmount, ans).toFixed(2);
    const totalInterest = math.subtract(finalAmount, principalAmount);
    setResult(finalAmount);
    setTotalInterest(totalInterest.toFixed(2));
    const newBalance = math.add(totalInterest, accountValue);
    setNewBalance(newBalance);
    const type="FD"
    setType(type)
  };
    const updateBalance = async () => {
      try {
          const response = await fetch(`http://localhost:5000/account/${email}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ newBalance: parseFloat(newBalance) }),
          });
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setMessage(data.message);
          setError('');
      } catch (error) {
          console.error('Error updating balance:', error);
          setMessage('');
          setError('Error updating balance');
      }
  };
  
	return (
	<div id ="fdbackground">
			  <div className='main'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 >Fixed Deposit</h1>
        <div className="fixed-deposit-explanation">
        <div>
            <p>
        Here's an explanation on how Fixed Deposit works: <br />
        For example, if a bank offers 8% p.a. for a 3-year deposit where the interest is compounded annually. <br />
        So, if you invest INR 10,000, we can calculate the interest as given below:
      </p>
      <br />
      <div>
                  <table id="table-fd">
                      <thead>
                          <tr>
                              <th>Year</th>
                              <th>Principal Amount</th>
                              <th>Calculation</th>
                              <th>Interest Earned</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1 year</td>
                              <td>10,000</td>
                              <td>10,000 x 8 x 1/100</td>
                              <td>800</td>
                          </tr>
                          <tr>
                              <td>2 year</td>
                              <td>10,800</td>
                              <td>10,800 x 8 x 1/100</td>
                              <td>864</td>
                          </tr>
                          <tr>
                              <td>3 year</td>
                              <td>11,664</td>
                              <td>11,664 x 8 x 1/100</td>
                              <td>933.12</td>
                          </tr>
                      </tbody>
                  </table>
                  </div>
            </div>
     
    <img src={FD_img} height={300} width={300}></img>
    </div>
    <br />
    <div id="lets-apply">
    <hr></hr>
    <h3>
        Let's try to apply with our understanding of Fixed Deposit to get the Target Amount:<br />
      </h3>
      <p>Question 1 : </p>
      <p>If you invest ₹50,000 in a fixed deposit with an interest rate of 5% per annum compounded annually</p> 
      <p> for 3 years, what is the maturity amount?</p>
      <div id="q1"> <input type="number" name="inputValue1" value={inputValue1} onChange={handleChange}  id="Q"></input> </div>
      <p>Question 2 : </p>
      <p>A fixed deposit offers an interest rate of 7% per annum, compounded quarterly. If you invest </p>
      <p>₹1,00,000 for 2 years, what is the maturity amount?</p>
      <input type="number" name="inputValue2"  value={inputValue2} onChange={handleChange}  id="Q"></input>
      <p>Question 3 : </p>
      <p>What is the total interest earned if you deposit ₹80,000 in a fixed deposit with an interest</p>
      <p>rate of 6% per annum, compounded semi-annually for 5 years?</p>
      <input type="number" name="inputValue3"  value={inputValue3} onChange={handleChange}  id="Q"></input>
      <div id="submit">
                <button type="submit" id="submit_btn" onClick={handleSubmit}>Submit</button> 
        </div>
        </div>
      
      {correct !== 0 && (
        <div>
          <br></br>
          <br></br>
        <b>{correct}/3 answered correctly</b><br></br>
        <b>Correct answers are: {correctAnswer1} {correctAnswer2} {correctAnswer3}</b>
        </div>
      )}
      <div className="calculator">
       <div className="input-group">
            <label htmlFor="slider">Principal Amount: {principalAmount}</label><br/>
            <input
                type="range"
                id="slider"
                min={1000}
                max={100000}
                step={500}
                value={principalAmount}
                onChange={handleSlider1Change}
            />
        </div>
        <div>
            <label htmlFor="slider">Rate of interest (p.a): {interestRate} %</label><br/>
            <input
                type="range"
                id="slider"
                min={1}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={handleSlider2Change}
            />
        </div>
        <div className="input-group">
            <label htmlFor="slider">Time Period: {timePeriod} years</label><br/>
            <input
                type="range"
                id="slider"
                min={1}
                max={25}
                value={timePeriod}
                onChange={handleSlider3Change}
            />
        </div>
        <div className="input-group">
            <label htmlFor="compoundingPeriod">Compounding Period:</label>
            <select id="compoundingPeriod" onChange={handleCompoundingPeriodChange} value={compoundingPeriod}>
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="halfYearly">Half Yearly</option>
            </select>
        </div>
      <button onClick={handleAddClick}>Calculate</button>
      {result !== 0 && (
        <div>
          <p>Total Amount: {result}</p>
          <p>Interest: {totalInterest}</p>
        </div>
      )}
    </div>
    </div>
    <hr></hr>
            <div>
                <p>Enter Email ID to view Virtual Account balance:  <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> <button onClick={getAccountValue}>Get Account Value</button></p>
                {/* <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter Email Id' /> */}
                {/* <button onClick={getAccountValue}>Get Account Value</button> */}
                {accountValue && <p>Account Value: {accountValue}</p>}
                {error && <p>Error: {error}</p>}

            </div>
            <div>
                <button onClick={updateBalance}>Update Balance</button>
                {message && <p>{message}</p>}

            </div>
            <div>
            <button onClick={updateHistory}  >Update History</button>

            </div>
	</div>
	);
};

export default FixedDeposit;