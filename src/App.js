import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Order from './component/Order/Order';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
