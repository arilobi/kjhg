import React, { useContext } from "react";
import { useState } from "react";
import dashboard from "../assets/images/dashboard.png";
import { ThemeContext } from "../Pages/ThemeContext";

export default function TransactionForm({ onAddTransaction }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const { isDarkMode } = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !amount || !date || !transactionType) {
            alert("All fields are required");
            return;
        }

        const newTransaction = {
            name: name,
            // The ISO format is the standard way to have the date e.g MM / DD / YEAR
            date: new Date(date).toISOString(),
            amount: parseFloat(amount),
            transactionType: transactionType
        };

        onAddTransaction(newTransaction);

        // Resetting the form after submitting
        setName("");
        setDate("");
        setAmount("");
        setTransactionType("");
    };

    const formStyles = {
        backgroundColor: isDarkMode ? " #333" : "#fff",
        color: isDarkMode ? " #fff" : "#000"
    };

    return (
        <div class="form-app" styles={formStyles}>
            <img src={dashboard} alt="Bitcoin" class="dashboard-img"/>
            <h2>Welcome to your Finance Tracking Website</h2>
            <h3>Use this form to fill in your transactions</h3>
            <p>___________________________________________________________________</p>
            <br></br>
            <div class="form">
            <form onSubmit={handleSubmit}>
                
                    <input type="text" placeholder="Name" class="name-name" value={name} onChange={(e) => setName(e.target.value)} />
        
                    <input type="date" value={date} class="date-date" onChange={(e) => setDate(e.target.value)} />
               
                    <input type="number" placeholder="Amount" class="amount-amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
               
                    <select class="select" value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="food">Food</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="rent">Rent</option>
                        <option value="other">Other</option>
                    </select>
               
               <br></br>
               <br></br>
                <button type="submit" class="submit-btn" >Submit</button>
                <br></br>
                <br></br>
            </form>
            </div>
        </div>
    );
}
