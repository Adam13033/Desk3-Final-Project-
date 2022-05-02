import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CoinPage from './components/CoinPage';
import MainDiv from './components/MainDiv';

const App = () => {
  return (
    
    <div className="App">
      

     <BrowserRouter>
        <Route path="/" component={MainDiv} exact />
        <Route path={"/coins/:id"} component={CoinPage} exact />
        </BrowserRouter>
    </div>
    
  );
}

export default App;