import { useState } from 'react'
import { PopButton } from './ui/pop-button'
import { Heart, Star, Eye, Palette, User, Instagram, Twitter, Globe } from 'lucide-react'
import AddToCartButton from './AddToCartButton'

interface ArtistProfileProps {
  artist: {
    name: string
    bio: string
    avatar: string
    works: number
    followers: number
    coverImage?: string
    location?: string
    experience?: string
    specialties?: string[]
    socialLinks?: {
      instagram?: string
      twitter?: string
      website?: string
    }
  }
  artworks: any[]
}

const ArtistProfile = ({ artist, artworks }: ArtistProfileProps) => {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-pop-blue/10 to-white">
      {/* Artist Header */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-64 bg-pop-gradient relative overflow-hidden">
          <div className="halftone-dots-orange absolute inset-0"></div>
          {artist.coverImage && (
            <img
              src={artist.coverImage}
              alt={`${artist.name} cover`}
              className="w-full h-full object-cover opacity-50"
            />
          )}
        </div>
        
        {/* Artist Info */}
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-20">
            {/* Avatar */}
            <div className="comic-frame-lg bg-white p-2 rounded-3xl">
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-32 h-32 rounded-2xl object-cover"
              />
            </div>
            
            {/* Artist Details */}
            <div className="flex-1 bg-white comic-frame rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="font-comic text-3xl text-gray-800 mb-2">
                    {artist.name}
                  </h1>
                  <p className="font-handwritten text-lg text-gray-600 mb-4">
                    {artist.bio}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex gap-6 text-sm">
                    <div className="text-center">
                      <div className="font-comic text-xl text-pop-orange">
                        {artist.works}
                      </div>
                      <div className="font-handwritten text-gray-600">
                        Artworks
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-comic text-xl text-pop-pink">
                        {artist.followers}
                      </div>
                      <div className="font-handwritten text-gray-600">
                        Followers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-comic text-xl text-pop-blue">
                        4.9
                      </div>
                      <div className="font-handwritten text-gray-600">
                        Rating
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <PopButton
                    variant={isFollowing ? 'accent' : 'primary'}
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    <User className="mr-2" size={18} />
                    {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
                  </PopButton>
                  
                  <PopButton variant="outline">
                    <Heart className="mr-2" size={18} />
                    LIKE
                  </PopButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Artist Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* About */}
            <div className="comic-frame bg-white rounded-2xl p-6">
              <h3 className="font-comic text-xl text-pop-orange mb-4">
                ABOUT
              </h3>
              
              {artist.location && (
                <div className="mb-3">
                  <div className="font-comic text-sm text-gray-600">Location</div>
                  <div className="font-handwritten">{artist.location}</div>
                </div>
              )}
              
              {artist.experience && (
                <div className="mb-3">
                  <div className="font-comic text-sm text-gray-600">Experience</div>
                  <div className="font-handwritten">{artist.experience}</div>
                </div>
              )}
              
              {artist.specialties && (
                <div className="mb-3">
                  <div className="font-comic text-sm text-gray-600 mb-2">Specialties</div>
                  <div className="flex flex-wrap gap-2">
                    {artist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="font-handwritten text-xs bg-pop-yellow/20 text-pop-orange px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Social Links */}
            {artist.socialLinks && (
              <div className="comic-frame bg-white rounded-2xl p-6">
                <h3 className="font-comic text-xl text-pop-pink mb-4">
                  CONNECT
                </h3>
                <div className="space-y-3">
                  {artist.socialLinks.instagram && (
                    <a
                      href={artist.socialLinks.instagram}
                      className="flex items-center gap-3 font-handwritten text-gray-600 hover:text-pop-pink transition-colors"
                    >
                      <Instagram size={20} />
                      Instagram
                    </a>
                  )}
                  {artist.socialLinks.twitter && (
                    <a
                      href={artist.socialLinks.twitter}
                      className="flex items-center gap-3 font-handwritten text-gray-600 hover:text-pop-blue transition-colors"
                    >
                      <Twitter size={20} />
                      Twitter
                    </a>
                  )}
                  {artist.socialLinks.website && (
                    <a
                      href={artist.socialLinks.website}
                      className="flex items-center gap-3 font-handwritten text-gray-600 hover:text-pop-orange transition-colors"
                    >
                      <Globe size={20} />
                      Website
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Artworks */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-comic text-2xl text-gray-800">
                  ARTWORKS ({artworks.length})
                </h3>
                <div className="flex gap-2">
                  <PopButton variant="outline" size="sm">
                    NEWEST
                  </PopButton>
                  <PopButton variant="outline" size="sm">
                    POPULAR
                  </PopButton>
                  <PopButton variant="outline" size="sm">
                    PRICE
                  </PopButton>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {artworks.map((artwork) => (
                  <div key={artwork.id} className="comic-frame bg-white rounded-2xl p-4 group hover:shadow-comic-lg transform hover:-translate-y-2 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src={artwork.image}
                        alt={artwork.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="halftone-dots absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-comic text-lg text-gray-800">
                        {artwork.name}
                      </h4>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-comic text-xl text-pop-orange">
                          ${artwork.price}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-pop-yellow fill-current" />
                          <span className="font-handwritten text-sm text-gray-600">
                            {artwork.rating}
                          </span>
                        </div>
                      </div>
                      
                      <AddToCartButton 
                        product={artwork}
                        className="w-full"
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Commission CTA */}
            <div className="comic-frame-lg bg-pop-gradient p-8 rounded-3xl text-center">
              <h3 className="font-comic text-3xl text-white mb-4">
                COMMISSION {artist.name.toUpperCase()}
              </h3>
              <p className="font-handwritten text-lg text-white mb-6">
                Get a custom pop art piece created just for you!
              </p>
              <PopButton variant="accent" size="lg">
                <Palette className="mr-2" size={24} />
                REQUEST COMMISSION
              </PopButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistProfile