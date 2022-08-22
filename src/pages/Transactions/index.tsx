import { useContext } from 'react'
import { Header } from '../../Components/Header'
import { SearchForm } from '../../Components/SearchForm'
import { Summary } from '../../Components/Summary'
import { TransactionsContext } from '../../Contexts/TransactionsContext'
import { TransactionsContainer, TransactionsTable } from './styles'
import { TransactionsTableItem } from './TransactionsTableItem'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionsTableItem
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
