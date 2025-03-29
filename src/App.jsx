import { Routes, Route, Navigate } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/create" />} />
      <Route path="/create" element={<CreateEmployee />} />
      <Route path="/employees" element={<EmployeeList />} />
    </Routes>
  );
}

export default App;