import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TrsnsactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TrsnsactionProviderProps) {
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
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}