import { PopButton } from './ui/pop-button'
import { Sparkles, Zap, Heart } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-pop-secondary overflow-hidden">
      <div className="halftone-dots-orange absolute inset-0"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pop-blue rounded-full comic-frame animate-bounce"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-pop-green rounded-full comic-frame animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-pop-purple rounded-full comic-frame animate-bounce delay-300"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Speech Bubble */}
            <div className="speech-bubble inline-block">
              <p className="font-handwritten text-lg text-pop-orange font-bold">
                🔥 NEW COLLECTION DROPPED!
              </p>
            </div>
            
            <h1 className="font-comic text-6xl lg:text-8xl text-white leading-tight">
              POP ART
              <br />
              <span className="text-pop-yellow">FASHION</span>
              <br />
              EXPLOSION!
            </h1>
            
            <p className="font-handwritten text-xl text-white max-w-md">
              Discover the most groovy, funky, and absolutely radical collection 
              of pop art inspired clothing and accessories! 
            </p>
            
            <div className="flex flex-wrap gap-4">
              <PopButton variant="accent" size="lg" className="group">
                <Sparkles className="mr-2 group-hover:animate-spin" size={24} />
                SHOP NOW!
              </PopButton>
              <PopButton variant="outline" size="lg">
                <Heart className="mr-2" size={24} />
                VIEW ART
              </PopButton>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8">
              {[
                { number: '500+', label: 'Groovy Items' },
                { number: '10K+', label: 'Happy Customers' },
                { number: '24/7', label: 'Pop Vibes' }
              ].map((stat, index) => (
                <div key={index} className="comic-frame bg-white p-4 rounded-xl">
                  <div className="font-comic text-2xl text-pop-orange">
                    {stat.number}
                  </div>
                  <div className="font-handwritten text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="comic-frame-lg bg-white p-8 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop"
                alt="Pop Art Fashion Model"
                className="w-full h-96 object-cover rounded-2xl"
              />
              
              {/* Comic effects */}
              <div className="absolute -top-4 -right-4 bg-pop-yellow comic-frame rounded-full p-3">
                <Zap className="text-black" size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-pop-pink comic-frame rounded-xl p-3">
                <span className="font-comic text-white text-lg">WOW!</span>
              </div>
              
              {/* Price tag */}
              <div className="absolute top-4 left-4 bg-pop-orange comic-frame rounded-lg p-2 transform -rotate-12">
                <span className="font-comic text-white text-sm">FROM $29</span>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-pop-blue rounded-3xl comic-frame"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection