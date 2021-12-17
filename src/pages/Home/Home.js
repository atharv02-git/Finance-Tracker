import TransactionForm from "./TransactionForm"
// Styles
import './Home.css'
export default function Home() {
    return (
        <div className="container">
            <div className="content">
                Transaction List
            </div>
            <div className="sidebar">
                <TransactionForm />
            </div>
        </div>
    )
}
