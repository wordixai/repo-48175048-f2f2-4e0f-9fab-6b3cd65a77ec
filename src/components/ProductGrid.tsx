import { PopButton } from './ui/pop-button'
import { ShoppingCart, Heart, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Groovy Pop Tee",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    rating: 4.8,
    isNew: true,
    category: "Clothing"
  },
  {
    id: 2,
    name: "Retro Art Print",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    rating: 4.9,
    isNew: false,
    category: "Art"
  },
  {
    id: 3,
    name: "Pop Art Sneakers",
    price: 89.99,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    rating: 4.7,
    isNew: true,
    category: "Shoes"
  },
  {
    id: 4,
    name: "Comic Book Bag",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.6,
    isNew: false,
    category: "Accessories"
  },
  {
    id: 5,
    name: "Vintage Pop Poster",
    price: 19.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    rating: 4.8,
    isNew: false,
    category: "Art"
  }
]

const ProductCard = ({ product }) => {
  return (
    <div className="comic-frame bg-white rounded-2xl p-4 group hover:shadow-comic-lg transform hover:-translate-y-2 transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-pop-orange text-white font-comic text-xs px-2 py-1 rounded-full">
              NEW!
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-pop-pink text-white font-comic text-xs px-2 py-1 rounded-full">
              SALE!
            </span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white comic-frame rounded-full p-2 hover:bg-pop-yellow transition-colors">
            <Heart size={16} />
          </button>
        </div>
        
        {/* Halftone overlay */}
        <div className="halftone-dots absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-handwritten text-sm text-pop-purple bg-pop-purple/10 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-pop-yellow fill-current" />
            <span className="font-handwritten text-sm text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>
        
        <h3 className="font-comic text-lg text-gray-800">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <span className="font-comic text-xl text-pop-orange">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="font-handwritten text-sm text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        
        <PopButton className="w-full group/btn" variant="primary">
          <ShoppingCart size={18} className="mr-2 group-hover/btn:animate-bounce" />
          ADD TO CART
        </PopButton>
      </div>
    </div>
  )
}

const ProductGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pop-yellow/10 relative">
      <div className="halftone-dots-pink absolute inset-0 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="speech-bubble inline-block mb-6">
            <span className="font-handwritten text-pop-orange font-bold">
              ⭐ TRENDING NOW ⭐
            </span>
          </div>
          
          <h2 className="font-comic text-5xl lg:text-6xl text-gray-800 mb-4">
            EXPLOSIVE
            <br />
            <span className="text-pop-gradient">COLLECTION!</span>
          </h2>
          
          <p className="font-handwritten text-xl text-gray-600 max-w-2xl mx-auto">
            Check out our most popular pop art pieces that are making waves! 
            Each item is designed to make you stand out from the crowd! 💥
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Clothing', 'Art', 'Shoes', 'Accessories'].map((category) => (
            <PopButton
              key={category}
              variant={category === 'All' ? 'accent' : 'outline'}
              size="sm"
            >
              {category}
            </PopButton>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <PopButton variant="bouncy" size="lg">
            <Sparkles className="mr-2" size={24} />
            VIEW MORE AWESOME STUFF!
          </PopButton>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid