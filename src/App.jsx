import './App.css';
import SignUp from './sign-up/SignUp.jsx';
import SignIn from './sign-in/SignIn.jsx';
import Dashboard from './pages/Dashboard.jsx'; // ✅ Import this
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
