import { useAuthContext } from "../../hooks/useAuthContext"
import TransactionForm from "./TransactionForm"
// Styles
import './Home.css'
export default function Home() {
    const { user } = useAuthContext();
    return (
        <div className="container">
            <div className="content">
                Transaction List
            </div>
            <div className="sidebar">
                <TransactionForm uid={user.uid} />
            </div>
        </div>
    )
}
