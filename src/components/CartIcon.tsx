import { ShoppingCart } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { PopButton } from './ui/pop-button'

const CartIcon = () => {
  const { getTotalItems, toggleCart } = useCart()
  const itemCount = getTotalItems()

  return (
    <PopButton 
      variant="accent" 
      size="icon" 
      className="relative"
      onClick={toggleCart}
    >
      <ShoppingCart size={20} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-pop-pink text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </PopButton>
  )
}

export default CartIcon