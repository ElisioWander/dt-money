import { ThemeProvider } from 'styled-components'
import { ModalProvider } from './Contexts/ModalContext'
import { TransactionsProvider } from './Contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <ModalProvider>
          <Transactions />
        </ModalProvider>
      </TransactionsProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
