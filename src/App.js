import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./navigation";
import Home from "./Home";

import Contacts from "./Contacts";
import Blogs from "./Blogs";
import Learn from "./Learn";
import Accounts from "./Accounts";
import Page1 from "./Page1";
import Login from "./Login";
import Sign from "./Sign";
import FixedDeposit from "./FixedDeposit";
import View from "./View";
import Loan from "./Loan";

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Navigation/>}>
          <Route index element = {<Home/>}></Route>
          
          <Route path = "/Contacts" element = {<Contacts/>}></Route>
          <Route path = "/Blogs" element = {<Blogs/>}></Route>
          <Route path = "/Learn" element = {<Learn/>}></Route>
          <Route path = "/Accounts" element = {<Accounts/>}></Route>
          <Route path = "/Page1" element = {<Page1/>}></Route>
          <Route path = "/Login" element = {<Login/>}></Route>
          <Route path = "/Sign" element = {<Sign/>}></Route>
          <Route path = "/FixedDeposit" element = {<FixedDeposit/>}></Route>
          <Route path = "/View" element = {<View/>}></Route>
          <Route path = "/Loan" element = {<Loan/>}></Route>


        </Route>
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Back/>
    // </div>
  )
}
export default App;

