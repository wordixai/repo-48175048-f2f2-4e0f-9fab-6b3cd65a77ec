import { useState } from 'react'
import { PopButton } from './ui/pop-button'
import { Palette, Download, Share2, Undo, Redo, Save } from 'lucide-react'

const ArtCustomizer = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [selectedColors, setSelectedColors] = useState(['#FF6B6B', '#4ECDC4'])
  const [selectedSize, setSelectedSize] = useState('24x36')
  const [selectedFrame, setSelectedFrame] = useState('none')

  const templates = [
    {
      id: 1,
      name: "Pop Explosion",
      preview: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      basePrice: 45
    },
    {
      id: 2,
      name: "Comic Burst",
      preview: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      basePrice: 35
    },
    {
      id: 3,
      name: "Retro Waves",
      preview: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      basePrice: 55
    }
  ]

  const colorPalettes = [
    ['#FF6B6B', '#4ECDC4'],
    ['#FFE66D', '#FF6B6B'],
    ['#A8E6CF', '#FFD93D'],
    ['#6C5CE7', '#FD79A8'],
    ['#74B9FF', '#00B894']
  ]

  const sizes = [
    { name: '12x16', multiplier: 1, price: 0 },
    { name: '18x24', multiplier: 1.5, price: 15 },
    { name: '24x36', multiplier: 2, price: 25 },
    { name: '30x40', multiplier: 2.5, price: 45 }
  ]

  const frames = [
    { name: 'None', price: 0 },
    { name: 'Black Frame', price: 25 },
    { name: 'White Frame', price: 25 },
    { name: 'Wood Frame', price: 35 },
    { name: 'Gold Frame', price: 45 }
  ]

  const calculatePrice = () => {
    const template = templates[selectedTemplate]
    const sizeOption = sizes.find(s => s.name === selectedSize)
    const frameOption = frames.find(f => f.name === selectedFrame)
    
    return (template.basePrice * (sizeOption?.multiplier || 1)) + (sizeOption?.price || 0) + (frameOption?.price || 0)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pop-blue/10 relative">
      <div className="halftone-dots-pink absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="speech-bubble inline-block mb-6">
            <span className="font-handwritten text-pop-blue font-bold">
              🎨 CREATE YOUR ART 🎨
            </span>
          </div>
          
          <h2 className="font-comic text-5xl lg:text-6xl text-gray-800 mb-4">
            ART
            <br />
            <span className="text-pop-gradient">CUSTOMIZER!</span>
          </h2>
          
          <p className="font-handwritten text-xl text-gray-600 max-w-2xl mx-auto">
            Design your own unique pop art masterpiece! Choose templates, colors, 
            and sizes to create something totally groovy! 🌈
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Customization Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Template Selection */}
            <div className="comic-frame bg-white rounded-2xl p-6">
              <h3 className="font-comic text-2xl text-pop-orange mb-6">
                1. CHOOSE TEMPLATE
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {templates.map((template, index) => (
                  <div
                    key={template.id}
                    className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedTemplate === index
                        ? 'comic-frame-lg transform scale-105'
                        : 'comic-frame hover:shadow-comic-lg'
                    }`}
                    onClick={() => setSelectedTemplate(index)}
                  >
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-3 bg-white">
                      <div className="font-comic text-sm text-gray-800">
                        {template.name}
                      </div>
                      <div className="font-handwritten text-xs text-pop-orange">
                        From ${template.basePrice}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="comic-frame bg-white rounded-2xl p-6">
              <h3 className="font-comic text-2xl text-pop-pink mb-6">
                2. PICK COLORS
              </h3>
              <div className="grid grid-cols-5 gap-4 mb-6">
                {colorPalettes.map((palette, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-lg p-2 transition-all duration-300 ${
                      JSON.stringify(selectedColors) === JSON.stringify(palette)
                        ? 'comic-frame bg-gray-50'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedColors(palette)}
                  >
                    <div className="flex gap-1">
                      {palette.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-8 h-8 rounded-full border-2 border-black"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <PopButton variant="outline" size="sm">
                  <Palette className="mr-2" size={16} />
                  CUSTOM COLORS
                </PopButton>
                <PopButton variant="outline" size="sm">
                  RANDOM COLORS
                </PopButton>
              </div>
            </div>

            {/* Size Selection */}
            <div className="comic-frame bg-white rounded-2xl p-6">
              <h3 className="font-comic text-2xl text-pop-green mb-6">
                3. SELECT SIZE
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sizes.map((size) => (
                  <div
                    key={size.name}
                    className={`cursor-pointer p-4 rounded-lg text-center transition-all duration-300 ${
                      selectedSize === size.name
                        ? 'comic-frame bg-pop-green/10 border-pop-green'
                        : 'comic-frame hover:shadow-comic'
                    }`}
                    onClick={() => setSelectedSize(size.name)}
                  >
                    <div className="font-comic text-lg text-gray-800">
                      {size.name}"
                    </div>
                    <div className="font-handwritten text-sm text-gray-600">
                      {size.price > 0 ? `+$${size.price}` : 'Base price'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frame Selection */}
            <div className="comic-frame bg-white rounded-2xl p-6">
              <h3 className="font-comic text-2xl text-pop-purple mb-6">
                4. ADD FRAME (OPTIONAL)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {frames.map((frame) => (
                  <div
                    key={frame.name}
                    className={`cursor-pointer p-4 rounded-lg text-center transition-all duration-300 ${
                      selectedFrame === frame.name
                        ? 'comic-frame bg-pop-purple/10 border-pop-purple'
                        : 'comic-frame hover:shadow-comic'
                    }`}
                    onClick={() => setSelectedFrame(frame.name)}
                  >
                    <div className="font-comic text-sm text-gray-800">
                      {frame.name}
                    </div>
                    <div className="font-handwritten text-xs text-gray-600">
                      {frame.price > 0 ? `+$${frame.price}` : 'Free'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview & Order */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Preview */}
              <div className="comic-frame-lg bg-white rounded-2xl p-6">
                <h3 className="font-comic text-xl text-gray-800 mb-4">
                  PREVIEW
                </h3>
                
                <div className="relative">
                  <img
                    src={templates[selectedTemplate].preview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-xl"
                    style={{ 
                      filter: `hue-rotate(${selectedTemplate * 60}deg) saturate(1.2)` 
                    }}
                  />
                  <div className="halftone-dots-orange absolute inset-0 rounded-xl opacity-50"></div>
                  
                  {/* Color overlay simulation */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-30 mix-blend-overlay"
                    style={{ 
                      background: `linear-gradient(45deg, ${selectedColors[0]}, ${selectedColors[1] || selectedColors[0]})` 
                    }}
                  />
                </div>
                
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between font-handwritten">
                    <span>Template:</span>
                    <span>{templates[selectedTemplate].name}</span>
                  </div>
                  <div className="flex justify-between font-handwritten">
                    <span>Size:</span>
                    <span>{selectedSize}"</span>
                  </div>
                  <div className="flex justify-between font-handwritten">
                    <span>Frame:</span>
                    <span>{selectedFrame}</span>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="comic-frame bg-white rounded-2xl p-6">
                <h3 className="font-comic text-xl text-gray-800 mb-4">
                  TOOLS
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <PopButton variant="outline" size="sm">
                    <Undo size={16} />
                  </PopButton>
                  <PopButton variant="outline" size="sm">
                    <Redo size={16} />
                  </PopButton>
                  <PopButton variant="outline" size="sm">
                    <Save className="mr-1" size={16} />
                    Save
                  </PopButton>
                  <PopButton variant="outline" size="sm">
                    <Share2 className="mr-1" size={16} />
                    Share
                  </PopButton>
                </div>
              </div>

              {/* Order Summary */}
              <div className="comic-frame-lg bg-pop-gradient rounded-2xl p-6">
                <h3 className="font-comic text-xl text-white mb-4">
                  ORDER SUMMARY
                </h3>
                
                <div className="space-y-2 text-white font-handwritten mb-6">
                  <div className="flex justify-between">
                    <span>Base Price:</span>
                    <span>${templates[selectedTemplate].basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size ({selectedSize}"):</span>
                    <span>+${sizes.find(s => s.name === selectedSize)?.price || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frame:</span>
                    <span>+${frames.find(f => f.name === selectedFrame)?.price || 0}</span>
                  </div>
                  <hr className="border-white/30" />
                  <div className="flex justify-between font-comic text-lg">
                    <span>TOTAL:</span>
                    <span>${calculatePrice()}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <PopButton variant="accent" className="w-full" size="lg">
                    🛒 ADD TO CART
                  </PopButton>
                  <PopButton variant="outline" className="w-full border-white text-white hover:bg-white hover:text-gray-800">
                    <Download className="mr-2" size={18} />
                    DOWNLOAD PREVIEW
                  </PopButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArtCustomizer