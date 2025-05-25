import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SingleProductPage = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        if (!response.ok) {
          throw new Error('Could not fetch product details')
        }
        const data = await response.json()
        setProduct(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (loading) return <p className="text-center">Loading product...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>
  if (!product) return null

  const { title, image, description, price, rating } = product

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="space-y-4">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 ">
          🔙
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <p className="text-sm my-6 text-gray-600 capitalize">{description}</p>
        <p className="text-lg font-bold text-gray-800">Price: ${price}</p>
        <p className="text-sm text-gray-600">
          ⭐ {rating.rate} ({rating.count} reviews)
        </p>

        <button className="mt-4 rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
          Add to Cart
        </button>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-lg object-contain max-w-3/5"
      />
    </section>
  )
}

export default SingleProductPage
