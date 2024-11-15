import React, { useState, useEffect } from 'react';
import expensephoto from "../assets/images/expensephoto.png";
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';


const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null); 
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setExpenses(data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deleteExpense = (id) => {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Update the state to remove the deleted expense
        setExpenses(expenses.filter((expense) => expense.id !== id));
      })
      .catch((error) => console.error("Error deleting expense:", error));
  };

  const startEditingExpense = (expense) => {
    setEditingExpense(expense);
  };

  const updateExpense = (id, updatedExpense) => {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedExpense),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the edited expense
        setExpenses(
          expenses.map((expense) =>
            expense.id === id ? { ...expense, ...data } : expense
          )
        );
        setEditingExpense(null); // Clear the editing state
      })
      .catch((error) => console.error("Error updating expense:", error));
  };

  const expenseStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
  };

  return (
    <div class="expense-cls" style={expenseStyles}>
      <img src={expensephoto} alt="a calculator" className="expense-img" />
      <h2>Expenses</h2>
      <table className={`expense-table ${isDarkMode ? "table-dark" : "table-light"}`} >
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              {editingExpense && editingExpense.id === expense.id ? (
                <>
                  {/* Editable Fields */}
                  <td>
                    <input
                      type="date"
                      value={editingExpense.date}
                      onChange={(e) =>
                        setEditingExpense({
                          ...editingExpense,
                          date: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editingExpense.description}
                      onChange={(e) =>
                        setEditingExpense({
                          ...editingExpense,
                          description: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editingExpense.category}
                      onChange={(e) =>
                        setEditingExpense({
                          ...editingExpense,
                          category: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={editingExpense.amount}
                      onChange={(e) =>
                        setEditingExpense({
                          ...editingExpense,
                          amount: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <button className='save-btn'
                      onClick={() => updateExpense(expense.id, editingExpense)}
                    >
                      Save
                    </button>
                    <br></br>
                    <br></br>
                    <button className="cancel-btn" onClick={() => setEditingExpense(null)}>
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  {/* Non-editable Fields */}
                  <td>{expense.date}</td>
                  <td>{expense.description}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                  <td>
                    <button className="edit-btn" onClick={() => startEditingExpense(expense)}>
                      Edit
                    </button>
                    <br></br>
                    <br></br>
                    <button className="delete-btn" onClick={() => deleteExpense(expense.id)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
