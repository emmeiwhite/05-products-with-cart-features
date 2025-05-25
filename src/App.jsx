import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import SingleProductPage from './pages/SingleProductPage'

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:productId"
          element={<SingleProductPage />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
    </Router>
  )
}

export default App
