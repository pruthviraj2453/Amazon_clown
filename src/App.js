import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 
import Header from './Header';
import Home from "./Home"

function App() {
  return (
    <Router>
      <div>
    <Routes>
          <Route path="/about"
            element={<h1>About</h1>}/>
          <Route path="/users"
            element={<h1>Users</h1>}/>
          <Route path="/login"
            element={<h1>Login</h1>}/>
          <Route path="/checkout"
            element={[<Header/>,<h1>Checkout</h1>]}/>
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
