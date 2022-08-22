import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/axios'

type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

type TransactionContextData = {
  transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionContextData)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState([])

  async function loadTransactions() {
    const response = await api.get('/transactions')
    const data = response.data

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
