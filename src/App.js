import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './Pages/ThemeContext';
import Dashboard from './Pages/Dashboard';
import Layout from './components/Layout'
import Settings from './Pages/Settings';
import TransactionForm from './components/TransactionForm';
import Expenses from './Pages/Expenses';
import Report from './Pages/Report';
import Budget from './Pages/Budget';

function App() {
  const {isDarkMode} = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? 'dark=mode' : 'light-mode'}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TransactionForm />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Expenses" element={<Expenses />} />
          <Route path="Report" element={<Report />} />
          <Route path="Budget" element={<Budget />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
