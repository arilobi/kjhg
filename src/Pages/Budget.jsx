import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import budgetphoto from "../assets/images/budgetphoto.png";

const Budget = () => {
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [budgets, setBudgets] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Adding new budget to the state
    const newBudget = { category, budget: parseFloat(budget) };
    setBudgets([...budgets, newBudget]);

    // Reset form fields
    setCategory('');
    setBudget('');

    // Save the budget to db.json
    fetch('http://localhost:3000/budgets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category, budget: parseFloat(budget) }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Budget saved:', data))
      .catch((error) => console.error('Error saving budget:', error));
  };

  const budgetStyles = {
    backgroundColor: isDarkMode ? " #333" : "#fff",
    color: isDarkMode ? " #fff" : "#000"
  };

  return (
    <div class="budget-cls" style={budgetStyles}>
        <img src={budgetphoto} alt="Coins in a jar" class="budget-img" />
      <h2>Budget</h2>
      <form class="form-budget" onSubmit={handleSubmit}>
        <table className={`budget-table ${isDarkMode ? "table-dark" : "table-light"}`}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter category"
                  required
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Enter budget"
                  required
                 
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="budget-container">
          <button type="submit" class="btn-budget">Add Budget</button>
        </div>
      </form>

      {/* Display the list of added budgets */}
      <h3>Current Budgets</h3>
      <table className={`current-budget-table ${isDarkMode ? "table-dark" : "table-light"}`}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Budget;
