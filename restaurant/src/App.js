import './App.css';
import AllRoutes from './components/routes/Routes';
import CartProvider from './store/CartProvider';
import Search from './components/search/Search';


function App() {



  return (
    <div className='App'>
      <CartProvider>
        <Search />
        <AllRoutes />
      </CartProvider>
    </div>
  )
}

export default App;