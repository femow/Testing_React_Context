import './App.css';
import Header from './Components/Header/Header';
import Items from './Components/Items/Items';
import CartList from './Components/CartList/Modal';
import Presentation from './Components/Presentation/Presentation';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {

  const [onCartList, setOnCartList] = useState(false);

  return (
    <CartProvider>
        <Header setOnCartList={() => setOnCartList(true)}/>
        <Presentation />
        <Items />
        {onCartList && <CartList onClick={() => setOnCartList(false)}/>}
    </CartProvider>
  );
}

export default App;