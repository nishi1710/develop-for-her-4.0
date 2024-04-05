import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import * as math from 'mathjs';
import './loan.css'
import Loan_img from './Loan_formula.jpeg'


const Loan = () => {
  const [principalAmount, setprincipalAmount] = useState(1000);
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
  const [correct, setCorrect] = useState(-1);
  const [compoundingPeriod, setCompoundingPeriod] = useState('yearly');

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
    if (name === 'inputValue1'){
        setInputValue1(value);
    }else if (name === 'inputValue2'){
        setInputValue2(value);
    }else if (name === 'inputValue3'){
        setInputValue3(value);
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    var count = 0;
    setCorrect(0);
    if(inputValue1 == 392.33){
      count++
      setCorrectAnswer1("Q1 ")
    }
    if(inputValue2 == 887338.55){
      count++
      setCorrectAnswer2("Q2 ")
    }
    if(inputValue3 == 0.006458){
      count++
      setCorrectAnswer3("Q3 ")
    }
    setCorrect(count)
  };
  const handleAddClick = () => {
    var n;
    // Perform fixed deposit calculation
    const interestRatePercentage = math.divide(interestRate, 100);
    const ans = math.pow(math.add(1, interestRatePercentage),timePeriod);
    console.log(timePeriod)
    console.log(ans)
    const monthlyPayment = math.divide(math.multiply(principalAmount, interestRatePercentage, ans),math.subtract(ans,1)).toFixed(2);
    setResult(monthlyPayment);
  };
	return (
	<div id ="Loanbackground">
    <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
			  <div className='main'>
        <h1 >Loan</h1>
        <div className="Loan-explanation">
          
            <div>
                <br></br>
                <br></br>
                <br></br>
                <p>
                A loan is a financial arrangement where a lender provides funds to a borrower,<br></br>
                who agrees to repay the amount with interest over a set period. The formula for <br></br>
                calculating the monthly payment on a loan is typically based on the loan amount, <br></br>
                interest rate, and loan term. One commonly used formula is the amortization<br></br>
                formula, which determines equal monthly payments over the loan term. Understanding the loan
                formula helps borrowers estimate their monthly payments <br></br>
                and plan their finances accordingly.
                </p>
            <br />
            </div>
            <div id = "img1">
             <img src={Loan_img} height={150} width={550} id="loanfor"></img>
            </div>
        </div>
    <br />
    
    <hr></hr>
    <h3>
        Let's try to apply with our understanding of Loan to get the Target Amount:<br />
      </h3>
      <p>Question 1 : </p>
      <p>If the principal amount  P  is 10000, the monthly interest rate  r is 0.02 (or 2% per month),</p>
      <p> and the loan term  n  is 36 months, what is the monthly payment M ?</p> 
     
      
      <div id="q1"> <input type="number" name="inputValue1" value={inputValue1} onChange={handleChange}  id="Q"></input> </div>
      <p>Question 2 : </p>
      <p>If the monthly payment M is 41770.11, the monthly interest rate r is 0.01 (or 1% per month), and the</p>
      <p> loan term  n is 24 months, what is the principal amount  P ?</p>
      
      <input type="number" name="inputValue2"  value={inputValue2} onChange={handleChange}  id="Q"></input>
      <p>Question 3 : </p>
      <p>With a principal amount  P  of 1655047, a monthly payment  M  of 600, and a loan term n </p>
      <p>of 48 months, what is the monthly interest rate  r ?</p>
      
      <input type="number" name="inputValue3"  value={inputValue3} onChange={handleChange}  id="Q"></input>
      <div id="submit">
                <button type="submit" id="submit_btn" onClick={handleSubmit}>Submit</button> 
        </div>
      
      {correct !== -1 && (
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
                max={500000}
                step={500}
                value={principalAmount}
                onChange={handleSlider1Change}
            />
        </div>
        <div>
            <label htmlFor="slider">Rate of interest (p.m): {interestRate} %</label><br/>
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
        <br></br>
        <div className="input-group">
            <label htmlFor="slider">Loan term: {timePeriod} months</label><br/>
            <input
                type="range"
                id="slider"
                min={1}
                max={120}
                value={timePeriod}
                onChange={handleSlider3Change}
            />
        </div>
      <button onClick={handleAddClick}>Calculate</button>
      {result !== 0 && (
        <div>
          <p>Monthly Payment: {result}</p>
        </div>
      )}
    </div>
    </div>
			
	</div>
	);
};

export default Loan;