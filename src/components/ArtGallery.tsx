import { useState } from 'react'
import { PopButton } from './ui/pop-button'
import { Heart, Star, Eye, Palette, User, Frame } from 'lucide-react'
import AddToCartButton from './AddToCartButton'

const artworks = [
  {
    id: 101,
    name: "Pop Explosion #1",
    artist: "Luna Creative",
    price: 89.99,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    rating: 4.9,
    category: "Art",
    artType: "Digital Print",
    size: "24x36 inches",
    medium: "Giclée Print",
    year: "2024",
    description: "Vibrant pop art explosion featuring dynamic colors and comic book aesthetics. Perfect for modern spaces.",
    tags: ["colorful", "modern", "abstract", "energetic"],
    isLimited: true,
    edition: "Limited Edition 1/50",
    views: 1247
  },
  {
    id: 102,
    name: "Retro Comic Dreams",
    artist: "Max Popster",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
    rating: 4.8,
    category: "Art",
    artType: "Canvas Print",
    size: "20x30 inches",
    medium: "Canvas",
    year: "2024",
    description: "Nostalgic comic book inspired artwork with halftone patterns and bold typography.",
    tags: ["retro", "comic", "vintage", "bold"],
    isLimited: false,
    views: 892
  },
  {
    id: 103,
    name: "Neon Pop Portrait",
    artist: "Zara Bright",
    price: 150.00,
    originalPrice: 200.00,
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=600&fit=crop",
    rating: 4.9,
    category: "Art",
    artType: "Acrylic Print",
    size: "30x40 inches",
    medium: "Acrylic",
    year: "2024",
    description: "Stunning neon-inspired portrait with pop art techniques and vibrant color palette.",
    tags: ["portrait", "neon", "contemporary", "striking"],
    isLimited: true,
    edition: "Limited Edition 1/25",
    views: 2156
  },
  {
    id: 104,
    name: "Abstract Pop Chaos",
    artist: "Rico Pop",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
    rating: 4.7,
    category: "Art",
    artType: "Poster Print",
    size: "18x24 inches",
    medium: "High-Quality Paper",
    year: "2024",
    description: "Chaotic yet harmonious abstract composition in true pop art style.",
    tags: ["abstract", "chaos", "geometric", "playful"],
    isLimited: false,
    views: 634
  },
  {
    id: 105,
    name: "Comic Book Hero",
    artist: "Luna Creative",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    rating: 4.8,
    category: "Art",
    artType: "Metal Print",
    size: "24x24 inches",
    medium: "Aluminum",
    year: "2024",
    description: "Classic comic book hero rendered in vibrant pop art style with halftone effects.",
    tags: ["hero", "comic", "halftone", "classic"],
    isLimited: true,
    edition: "Limited Edition 1/100",
    views: 1876
  },
  {
    id: 106,
    name: "Pop Art Collage",
    artist: "Maya Colors",
    price: 95.00,
    originalPrice: 130.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    rating: 4.9,
    category: "Art",
    artType: "Mixed Media",
    size: "36x48 inches",
    medium: "Mixed Media",
    year: "2024",
    description: "Dynamic collage featuring multiple pop art elements and techniques in one stunning piece.",
    tags: ["collage", "mixed", "dynamic", "complex"],
    isLimited: true,
    edition: "Limited Edition 1/30",
    views: 3421
  }
]

const artists = [
  {
    name: "Luna Creative",
    bio: "Contemporary pop artist known for explosive color combinations",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop",
    works: 12,
    followers: 5420
  },
  {
    name: "Max Popster",
    bio: "Retro-inspired artist bringing comic book aesthetics to modern art",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    works: 8,
    followers: 3210
  },
  {
    name: "Zara Bright",
    bio: "Neon pop specialist creating vibrant contemporary masterpieces",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    works: 15,
    followers: 8930
  },
  {
    name: "Rico Pop",
    bio: "Abstract pop artist exploring chaos and harmony through color",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    works: 6,
    followers: 2150
  },
  {
    name: "Maya Colors",
    bio: "Mixed media artist creating complex pop art collages",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    works: 9,
    followers: 4680
  }
]

const ArtworkCard = ({ artwork, isDetailed = false }) => {
  const [isLiked, setIsLiked] = useState(false)
  const artist = artists.find(a => a.name === artwork.artist)

  if (isDetailed) {
    return (
      <div className="comic-frame-lg bg-white rounded-3xl p-6 transform hover:-translate-y-1 transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative group">
            <img
              src={artwork.image}
              alt={artwork.name}
              className="w-full h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="halftone-dots-orange absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {artwork.isLimited && (
                <span className="bg-pop-pink text-white font-comic text-xs px-3 py-1 rounded-full">
                  LIMITED!
                </span>
              )}
              {artwork.originalPrice && (
                <span className="bg-pop-orange text-white font-comic text-xs px-3 py-1 rounded-full">
                  SALE!
                </span>
              )}
            </div>

            {/* Heart */}
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`absolute top-4 right-4 comic-frame rounded-full p-2 transition-colors ${
                isLiked ? 'bg-pop-pink text-white' : 'bg-white text-gray-600 hover:bg-pop-yellow'
              }`}
            >
              <Heart size={20} className={isLiked ? 'fill-current' : ''} />
            </button>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-comic text-2xl text-gray-800 mb-2">
                {artwork.name}
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={artist?.avatar}
                  alt={artwork.artist}
                  className="w-8 h-8 rounded-full comic-frame"
                />
                <span className="font-handwritten text-pop-purple">
                  by {artwork.artist}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-pop-yellow fill-current" />
                  <span className="font-handwritten text-sm text-gray-600">
                    {artwork.rating}
                  </span>
                </div>
              </div>
            </div>

            <p className="font-handwritten text-gray-600">
              {artwork.description}
            </p>

            {/* Art Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="comic-frame bg-gray-50 p-3 rounded-lg">
                <div className="font-comic text-pop-orange">Size</div>
                <div className="font-handwritten">{artwork.size}</div>
              </div>
              <div className="comic-frame bg-gray-50 p-3 rounded-lg">
                <div className="font-comic text-pop-orange">Medium</div>
                <div className="font-handwritten">{artwork.medium}</div>
              </div>
              <div className="comic-frame bg-gray-50 p-3 rounded-lg">
                <div className="font-comic text-pop-orange">Year</div>
                <div className="font-handwritten">{artwork.year}</div>
              </div>
              <div className="comic-frame bg-gray-50 p-3 rounded-lg">
                <div className="font-comic text-pop-orange">Views</div>
                <div className="font-handwritten flex items-center gap-1">
                  <Eye size={12} />
                  {artwork.views}
                </div>
              </div>
            </div>

            {artwork.isLimited && (
              <div className="comic-frame bg-pop-gradient p-3 rounded-lg">
                <div className="font-comic text-white text-sm">
                  {artwork.edition}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {artwork.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-handwritten text-xs bg-pop-yellow/20 text-pop-orange px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Price & Actions */}
            <div className="border-t pt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-comic text-2xl text-pop-orange">
                  ${artwork.price}
                </span>
                {artwork.originalPrice && (
                  <span className="font-handwritten text-lg text-gray-400 line-through">
                    ${artwork.originalPrice}
                  </span>
                )}
              </div>
              
              <div className="flex gap-3">
                <AddToCartButton 
                  product={artwork}
                  className="flex-1"
                />
                <PopButton variant="outline" size="default">
                  <Frame size={18} className="mr-2" />
                  CUSTOM FRAME
                </PopButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="comic-frame bg-white rounded-2xl p-4 group hover:shadow-comic-lg transform hover:-translate-y-2 transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={artwork.image}
          alt={artwork.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {artwork.isLimited && (
            <span className="bg-pop-pink text-white font-comic text-xs px-2 py-1 rounded-full">
              LIMITED!
            </span>
          )}
          {artwork.originalPrice && (
            <span className="bg-pop-orange text-white font-comic text-xs px-2 py-1 rounded-full">
              SALE!
            </span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`comic-frame rounded-full p-2 transition-colors ${
              isLiked ? 'bg-pop-pink text-white' : 'bg-white hover:bg-pop-yellow'
            }`}
          >
            <Heart size={16} className={isLiked ? 'fill-current' : ''} />
          </button>
        </div>
        
        {/* Halftone overlay */}
        <div className="halftone-dots absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Artwork Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-handwritten text-sm text-pop-purple bg-pop-purple/10 px-2 py-1 rounded-full">
            {artwork.artType}
          </span>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-pop-yellow fill-current" />
            <span className="font-handwritten text-sm text-gray-600">
              {artwork.rating}
            </span>
          </div>
        </div>
        
        <div>
          <h3 className="font-comic text-lg text-gray-800 mb-1">
            {artwork.name}
          </h3>
          <div className="flex items-center gap-2">
            <img
              src={artist?.avatar}
              alt={artwork.artist}
              className="w-5 h-5 rounded-full"
            />
            <span className="font-handwritten text-sm text-gray-600">
              by {artwork.artist}
            </span>
          </div>
        </div>

        <div className="font-handwritten text-sm text-gray-500">
          {artwork.size} • {artwork.medium}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="font-comic text-xl text-pop-orange">
            ${artwork.price}
          </span>
          {artwork.originalPrice && (
            <span className="font-handwritten text-sm text-gray-400 line-through">
              ${artwork.originalPrice}
            </span>
          )}
        </div>
        
        <AddToCartButton 
          product={artwork}
          className="w-full"
        />
      </div>
    </div>
  )
}

const ArtistCard = ({ artist }) => {
  return (
    <div className="comic-frame bg-white rounded-xl p-4 text-center group hover:shadow-comic-lg transition-all duration-300">
      <img
        src={artist.avatar}
        alt={artist.name}
        className="w-16 h-16 rounded-full comic-frame mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
      />
      <h4 className="font-comic text-lg text-gray-800 mb-1">
        {artist.name}
      </h4>
      <p className="font-handwritten text-sm text-gray-600 mb-3">
        {artist.bio}
      </p>
      <div className="flex justify-center gap-4 text-xs text-gray-500 mb-3">
        <span className="font-handwritten">
          <Palette className="inline w-3 h-3 mr-1" />
          {artist.works} works
        </span>
        <span className="font-handwritten">
          <User className="inline w-3 h-3 mr-1" />
          {artist.followers}
        </span>
      </div>
      <PopButton variant="outline" size="sm" className="w-full">
        VIEW WORKS
      </PopButton>
    </div>
  )
}

const ArtGallery = () => {
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'detailed'

  const artTypes = ['all', 'Digital Print', 'Canvas Print', 'Acrylic Print', 'Poster Print', 'Metal Print', 'Mixed Media']

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.artType === filter)

  return (
    <section className="py-20 bg-gradient-to-b from-pop-purple/10 to-white relative">
      <div className="halftone-dots-pink absolute inset-0 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="speech-bubble inline-block mb-6">
            <span className="font-handwritten text-pop-purple font-bold">
              🎨 ART GALLERY 🎨
            </span>
          </div>
          
          <h2 className="font-comic text-5xl lg:text-6xl text-gray-800 mb-4">
            EXPLOSIVE
            <br />
            <span className="text-pop-gradient">ART COLLECTION!</span>
          </h2>
          
          <p className="font-handwritten text-xl text-gray-600 max-w-2xl mx-auto">
            Discover incredible pop art pieces from talented artists around the world! 
            Each artwork is a unique explosion of creativity and style! 🎨
          </p>
        </div>

        {/* Featured Artists */}
        <div className="mb-16">
          <h3 className="font-comic text-3xl text-center text-gray-800 mb-8">
            FEATURED ARTISTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {artists.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        </div>
        
        {/* Art Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {artTypes.map((type) => (
            <PopButton
              key={type}
              variant={filter === type ? 'accent' : 'outline'}
              size="sm"
              onClick={() => setFilter(type)}
            >
              {type === 'all' ? 'ALL ARTWORKS' : type.toUpperCase()}
            </PopButton>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <PopButton
            variant={viewMode === 'grid' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            GRID VIEW
          </PopButton>
          <PopButton
            variant={viewMode === 'detailed' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setViewMode('detailed')}
          >
            DETAILED VIEW
          </PopButton>
        </div>
        
        {/* Artworks Grid */}
        <div className={viewMode === 'detailed' 
          ? "space-y-12" 
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        }>
          {filteredArtworks.map((artwork) => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              isDetailed={viewMode === 'detailed'}
            />
          ))}
        </div>

        {/* Custom Art Commission CTA */}
        <div className="mt-20 text-center">
          <div className="comic-frame-lg bg-pop-gradient p-12 rounded-3xl transform -rotate-1 inline-block">
            <h3 className="font-comic text-4xl text-white mb-4">
              WANT CUSTOM ART?
            </h3>
            <p className="font-handwritten text-xl text-white mb-6 max-w-md">
              Commission a unique pop art piece tailored just for you! 
              Work directly with our amazing artists!
            </p>
            <PopButton variant="accent" size="lg">
              <Palette className="mr-2" size={24} />
              COMMISSION ART
            </PopButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArtGallery