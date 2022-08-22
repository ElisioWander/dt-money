import { ReactNode } from 'react'
import { priceFormatter } from '../../utils/Formatter'
import { Card } from './summaryCardStyles'

interface SummaryCardProps {
  title: string
  icon: ReactNode
  summaryValue: number
  cardColor?: 'green'
}

export function SummaryCard({
  title,
  icon,
  summaryValue,
  cardColor,
}: SummaryCardProps) {
  const money = priceFormatter.format(summaryValue)

  return (
    <Card variant={cardColor}>
      <header>
        <span>{title}</span>
        {icon}
      </header>

      <strong>{money}</strong>
    </Card>
  )
}
