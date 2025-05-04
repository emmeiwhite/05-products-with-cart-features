import { Link } from 'react-router-dom'
import logo from './../assets/logo.png'
import cartIcon from './../assets/cart.png'

const Navigation = () => {
  return (
    <nav className="">
      <div className="max-w-[1140px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-10"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-2 bg-[#f59E0D] rounded-[50px] px-3 py-1.5">
              <span className="text-amber-50">10</span>
              <img
                src={cartIcon}
                alt="cart icon"
                className="h-6"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navigation
