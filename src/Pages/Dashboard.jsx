import TransactionForm from "../components/TransactionForm";
import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext"

export default function Dashboard() {
    const [transactions, setTransactions] = useState([]);
    const { isDarkMode } = useContext(ThemeContext);

    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction])
    };

    const dashboardStyles = {
        backgroundColor: isDarkMode ? "#333" : "fff",
        color: isDarkMode ? "#fff" : " #000"
    };

    return (
        <div style={dashboardStyles}>
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <ul class="unordered">
                {transactions.map((transaction) => (
                   <li key={transaction.id}>
                   {transaction.name} - {transaction.date} - KES{transaction.amount} - {transaction.transactionType}
               </li>

                ))}
            </ul>
        </div>
    );
}

