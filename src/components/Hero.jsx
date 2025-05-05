import heroImg from './../assets/pizza.png' // Update path if needed
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gray-50 py-4 max-w-[1140px] mx-auto px-4 ">
      <div className="max-w-[1140px] mx-auto px-4 flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-md">
          <p className="text-gray-600 text-lg mb-2">Are you hungry?</p>
          <h1 className="text-4xl font-bold mb-6">
            Don't wait<span className="text-orange-500">!</span>
          </h1>
          <Link
            to="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition">
            Order Now
          </Link>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={heroImg}
            alt="Delicious Pizza"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
