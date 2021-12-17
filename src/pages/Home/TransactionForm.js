import { useState } from "react";

export default function TransactionForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const transactionSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, amount);
  };
  return (
    <>
      <h3>Add a transaction:</h3>
      <form onSubmit={transactionSubmitHandler}>
        <label>
          <span>Add Transaction Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            // Here the value prop adds on a two way binding which results if we resets the form outside the input then it reflects the change inside the input
          />
        </label>

        <label>
          <span>Amount (Rs):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            // Here the value prop adds on a two way binding which results if we resets the form outside the input then it reflects the change inside the input
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
