//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpenses';
import Transactions from './components/Transaction';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
import Footer from './components/Footer';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transactions />
        <AddTransaction />
      </div>
      <Footer />
    </GlobalProvider>
  );
    
}

export default App;
