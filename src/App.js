import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login"exact element={<Login /> } />
        {/* <Route path="/" exact element={<Productos />} /> */}
      </Switch>
  </Router>
  );
}

export default App;
