import { Search, User, Menu } from 'lucide-react'
import { PopButton } from './ui/pop-button'
import { useState } from 'react'
import CartIcon from './CartIcon'

const PopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative bg-pop-gradient border-b-4 border-black">
      <div className="halftone-dots-pink absolute inset-0"></div>
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="comic-frame bg-white p-3 rounded-full">
              <div className="w-8 h-8 bg-pop-orange rounded-full relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 bg-pop-pink rounded-full"></div>
              </div>
            </div>
            <h1 className="font-comic text-3xl text-white drop-shadow-lg">
              POP SHOP
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Clothing', 'Art', 'Accessories'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-handwritten text-lg text-white hover:text-pop-yellow transition-colors duration-300 hover:scale-110 transform"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-white comic-frame rounded-full px-4 py-2 w-64">
            <Search className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              placeholder="Search awesome stuff..."
              className="flex-1 outline-none font-handwritten"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <PopButton variant="outline" size="icon" className="hidden sm:flex">
              <User size={20} />
            </PopButton>
            <CartIcon />
            <PopButton
              variant="secondary"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={20} />
            </PopButton>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white comic-frame rounded-xl p-4">
            <nav className="flex flex-col space-y-3">
              {['Home', 'Clothing', 'Art', 'Accessories'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-handwritten text-lg text-black hover:text-pop-orange transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <Search className="text-gray-500 mr-2" size={16} />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 outline-none bg-transparent font-handwritten"
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default PopHeader