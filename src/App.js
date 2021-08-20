import './App.css';
import { AddTransactions } from './components/AddTransactions';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionsList } from './components/TransactionsList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className = 'container'>
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransactions />
     </div>
    </GlobalProvider>
  );
}

export default App;
