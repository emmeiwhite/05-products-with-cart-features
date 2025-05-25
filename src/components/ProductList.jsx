import ProductItem from './ProductItem'
import { useState, useEffect } from 'react'

const url = 'https://fakestoreapi.com/products'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Products could not be fetched')
      }
      const data = await response.json()

      console.log(data)
      setLoading(false)
      setProducts(data)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) {
    return <p>loading ...</p>
  }

  if (error) {
    return <p>error ...</p>
  }

  return (
    <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-4 py-4 sm:py-8">
      {products.map(item => (
        <ProductItem
          product={item}
          key={item.id}
        />
      ))}
    </div>
  )
}
export default ProductList
