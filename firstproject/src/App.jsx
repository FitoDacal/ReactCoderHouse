import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from './context/CartContext'
import { ThemeProvider } from './context/ThemeContext'
import ThemeWrapper from './components/ThemeWrapper'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <CartProvider>
          <ThemeWrapper>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<h1>404 Not found</h1>}/>
            </Routes>
          </ThemeWrapper>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )  
}

export default App
