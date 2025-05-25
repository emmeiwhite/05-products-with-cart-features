import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
  const { id, title, price, image, rating } = product

  // Helper to format price
  const formatPrice = amount =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)

  return (
    <Link
      to={`/products/${id}`}
      key={id}
      className="group relative rounded-lg border p-4 shadow-sm">
      <img
        alt={title}
        src={image}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
      />

      <div className="mt-4 flex flex-col justify-between gap-2">
        <div>
          <h3 className="text-sm font-medium text-gray-700 line-clamp-2">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">
            ⭐ {rating.rate} ({rating.count} reviews)
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold text-gray-900">{formatPrice(price)}</p>
          <button className="rounded-md bg-orange-600 px-3 py-1 text-white text-sm hover:bg-orange-700">
            Find more
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
