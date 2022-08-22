import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../Contexts/TransactionsContext'
import { SummaryCard } from './SummaryCard'

import { SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.icome += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      icome: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      <SummaryCard
        title="Entrada"
        icon={<ArrowCircleUp size={32} color="#00b37e" />}
        summaryValue={summary.icome}
      />
      <SummaryCard
        title="Saída"
        icon={<ArrowCircleDown size={32} color="#f75a68" />}
        summaryValue={summary.outcome}
      />
      <SummaryCard
        title="Total"
        icon={<CurrencyDollar size={32} color="#fff" />}
        summaryValue={summary.total}
        cardColor="green"
      />
    </SummaryContainer>
  )
}
