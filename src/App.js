import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import './App.css';
import Exchanges from './components/Exchanges'
import Coins from './components/Coins'
import CoinDetails from './components/CoinDetails'
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Exchanges/>}  /> 
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coins/:id' element={<CoinDetails/>} />
    </Routes>
    </Router>
  );
}

export default App;
