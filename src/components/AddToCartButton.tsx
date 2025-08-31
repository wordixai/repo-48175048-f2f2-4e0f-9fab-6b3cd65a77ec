import { ShoppingCart, Check } from 'lucide-react'
import { PopButton } from './ui/pop-button'
import { useCart } from '../hooks/useCart'
import { useState } from 'react'
import { toast } from 'sonner'

interface AddToCartButtonProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    category: string
  }
  className?: string
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'bouncy'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const AddToCartButton = ({ product, className, variant = 'primary', size = 'default' }: AddToCartButtonProps) => {
  const { addItem, toggleCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setIsAdded(true)
    
    // Show success toast
    toast.success(`${product.name} added to cart! 🎉`, {
      description: 'Check your cart to proceed to checkout',
      action: {
        label: 'View Cart',
        onClick: () => toggleCart()
      }
    })
    
    // Reset button state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <PopButton 
      className={`group/btn transition-all duration-300 ${className}`}
      variant={isAdded ? 'accent' : variant}
      size={size}
      onClick={handleAddToCart}
    >
      {isAdded ? (
        <>
          <Check size={18} className="mr-2 animate-bounce" />
          ADDED!
        </>
      ) : (
        <>
          <ShoppingCart size={18} className="mr-2 group-hover/btn:animate-bounce" />
          ADD TO CART
        </>
      )}
    </PopButton>
  )
}

export default AddToCartButton