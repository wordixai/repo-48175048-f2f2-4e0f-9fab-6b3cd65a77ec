import PopHeader from '../components/PopHeader'
import HeroSection from '../components/HeroSection'
import ProductGrid from '../components/ProductGrid'
import PopFooter from '../components/PopFooter'
import CartSidebar from '../components/CartSidebar'
import { Toaster } from 'sonner'

const Index = () => {
  return (
    <div className="min-h-screen">
      <PopHeader />
      <HeroSection />
      <ProductGrid />
      <PopFooter />
      <CartSidebar />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'white',
            border: '3px solid black',
            boxShadow: '4px 4px 0px black',
            fontFamily: 'Kalam, cursive'
          }
        }}
      />
    </div>
  )
}

export default Index