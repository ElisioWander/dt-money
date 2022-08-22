import { dateFormatter, priceFormatter } from '../../utils/Formatter'
import { PriceHighlight } from './TransactionsTableItemStyles'

type Transaction = {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsTableItemProps {
  transaction: Transaction
}

export function TransactionsTableItem({
  transaction,
}: TransactionsTableItemProps) {
  const price = priceFormatter.format(transaction.price)
  const createdAt = dateFormatter.format(new Date(transaction.createdAt))

  return (
    <tr>
      <td width="50%">{transaction.description}</td>
      <td>
        <PriceHighlight variant={transaction.type}>
          {transaction.type === 'outcome' && '- '}
          {price}
        </PriceHighlight>
      </td>
      <td>{transaction.category}</td>
      <td>{createdAt}</td>
    </tr>
  )
}
