import {Router,Route,Routes, BrowserRouter} from "react-router-dom"
import './App.css';
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Add } from "./components/Add";


function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
