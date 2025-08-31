import { PopButton } from './ui/pop-button'
import { Heart, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const PopFooter = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="halftone-dots absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <div className="comic-frame bg-pop-gradient p-8 rounded-3xl inline-block transform -rotate-1">
            <h3 className="font-comic text-3xl text-white mb-4">
              JOIN THE POP REVOLUTION!
            </h3>
            <p className="font-handwritten text-lg text-white mb-6 max-w-md">
              Subscribe to get the latest groovy updates and exclusive discounts!
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl font-handwritten text-black outline-none"
              />
              <PopButton variant="accent">
                SUBSCRIBE!
              </PopButton>
            </div>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="comic-frame bg-pop-orange p-2 rounded-full">
                <div className="w-6 h-6 bg-white rounded-full relative">
                  <div className="absolute top-1 left-1 w-1 h-1 bg-pop-orange rounded-full"></div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 bg-pop-pink rounded-full"></div>
                </div>
              </div>
              <h4 className="font-comic text-2xl">POP SHOP</h4>
            </div>
            <p className="font-handwritten text-gray-300">
              Bringing you the most radical pop art fashion since 2024! 
              Made with <Heart className="inline w-4 h-4 text-pop-pink" /> and lots of creativity.
            </p>
            <div className="flex space-x-3">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-pop-pink comic-frame rounded-full p-2 hover:bg-pop-orange transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-comic text-xl text-pop-yellow">QUICK LINKS</h4>
            <ul className="space-y-2 font-handwritten">
              {['About Us', 'Our Story', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-pop-yellow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-comic text-xl text-pop-pink">CATEGORIES</h4>
            <ul className="space-y-2 font-handwritten">
              {['Clothing', 'Art Prints', 'Accessories', 'Home Decor', 'Custom Orders'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-300 hover:text-pop-pink transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-comic text-xl text-pop-blue">CONTACT US</h4>
            <div className="space-y-3 font-handwritten text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-pop-blue" />
                <span>hello@popshop.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-pop-blue" />
                <span>+1 (555) POP-SHOP</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-pop-blue" />
                <span>123 Art Street, Creative City</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-handwritten text-gray-400 mb-4 md:mb-0">
            © 2024 Pop Shop. All rights reserved. Made with explosive creativity! 💥
          </p>
          <div className="flex space-x-6 font-handwritten text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default PopFooter