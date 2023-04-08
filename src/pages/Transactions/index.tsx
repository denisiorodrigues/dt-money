import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const[transactions, setTransactions] = useState<Transaction[]>([])

  //Usando com async/await
  async function loadTransations() {
    const response = await fetch('http://localhost:3000/transactions');
    const data = await response.json()

    setTransactions(data)
  }

  // Outra forma de fazer
  // async function loadTransationsNoAsync() {
  //   fetch('http://localhost:3000/transactions')
  //   .then((response) => { return response.json()})
  //   .then((data) => {console.log(data)})
  // }

  useEffect(() => {
    loadTransations()
  },[])

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
      <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}