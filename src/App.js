import React from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 
import Header from './Header';
import Home from "./Home"
import Checkout from './Checkout';
import Login from "./Login";
import Header_login from "./Header_login";

function App() {
  return (
    <Router>
      <div>
    <Routes>
          <Route path="/login"
            element={[<Header_login/>,<Login/>]}/>
          <Route path="/checkout"
            element={[<Header/>,<Checkout/>]}/>
          <Route path="/"
          element={[<Header/>,<Home/>]}
          >
          </Route>
     </Routes>
     </div>
    </Router>
  );
}


export default App;
