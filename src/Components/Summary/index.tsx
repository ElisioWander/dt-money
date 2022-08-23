import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard } from './SummaryCard'
import { SummaryContainer } from './styles'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

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
