import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountForm from './components/AccountForm';
import MemberOfParliament from './components/MemberOfParlamentForm';
import ApplyForm from './components/ApplyForm';
import MOPPage from './components/MOPPage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/MOP" element={<MOPPage />} />
          <Route path="/login" element={<Login />} /> {/* Moved Login inside Routes */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
