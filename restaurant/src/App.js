import './App.css';
import AllRoutes from './components/routes/Routes';
import CartProvider from './store/CartProvider';
import { useState } from 'react'
import Cart from './components/cart/Cart';
import Header from './components/header/Header';


function App() {

  const [showCart, setShowCart] = useState(false)

  const ShowCartHandler = () => {
    setShowCart(true)
  }

  const HideCartHandler = () => {
    setShowCart(false)
  }


  return (
    <CartProvider>
      {showCart && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <AllRoutes />
      </main>
    </CartProvider>
  );
}

export default App;
