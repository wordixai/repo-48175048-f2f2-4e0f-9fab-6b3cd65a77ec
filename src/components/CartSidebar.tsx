import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { PopButton } from './ui/pop-button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'

const CartSidebar = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    updateQuantity, 
    removeItem, 
    getTotalPrice,
    getTotalItems
  } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg bg-white">
        <SheetHeader className="border-b border-gray-200 pb-4">
          <SheetTitle className="font-comic text-2xl text-pop-orange flex items-center gap-2">
            <ShoppingBag size={24} />
            YOUR CART ({getTotalItems()})
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full pt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="comic-frame bg-pop-yellow/10 p-8 rounded-3xl mb-6">
                <ShoppingBag size={64} className="text-pop-orange mx-auto mb-4" />
                <h3 className="font-comic text-xl text-gray-600 mb-2">
                  YOUR CART IS EMPTY!
                </h3>
                <p className="font-handwritten text-gray-500">
                  Add some groovy items to get started!
                </p>
              </div>
              <PopButton onClick={closeCart} variant="primary">
                CONTINUE SHOPPING
              </PopButton>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {items.map((item) => (
                  <div key={item.id} className="comic-frame bg-white p-4 rounded-xl">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-comic text-sm text-gray-800 truncate">
                          {item.name}
                        </h4>
                        <p className="font-handwritten text-xs text-gray-500 mb-2">
                          {item.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-comic text-pop-orange">
                            ${item.price.toFixed(2)}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-pop-pink hover:text-white transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="font-comic text-sm w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-pop-green hover:text-white transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Cart Summary */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="comic-frame bg-pop-gradient p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-comic text-white text-lg">TOTAL:</span>
                    <span className="font-comic text-white text-2xl">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <PopButton className="w-full" variant="accent">
                    🚀 CHECKOUT NOW!
                  </PopButton>
                </div>
                
                <PopButton 
                  variant="outline" 
                  className="w-full"
                  onClick={closeCart}
                >
                  CONTINUE SHOPPING
                </PopButton>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartSidebar