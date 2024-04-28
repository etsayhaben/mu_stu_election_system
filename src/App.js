import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import AdminDashboard from './components/AdminDashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <AdminDashboard />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
