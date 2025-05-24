import heroImg from './../assets/pizza.png' // Update path if needed
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gray-50 py-4 max-w-6xl mx-auto px-4 ">
      <div className="max-w-6xl mx-auto px-4 flex gap-5 sm:gap-16 flex-col sm:flex-row items-center md:justify-between">
        {/* Left Content */}
        <div className="max-w-md order-1 sm:order-0 text-center sm:text-left">
          <p className="text-gray-600 text-lg mb-2">Are you hungry?</p>
          <h1 className="text-2xl sm:text-4xl font-bold mb-6">
            Don't wait<span className="text-orange-500">!</span>
          </h1>
          <Link
            to="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition">
            Order Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="order-0 sm:order-1">
          <img
            src={heroImg}
            alt="Delicious Pizza"
            className="w-[120px] h-[auto] sm:max-w-md sm:w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
