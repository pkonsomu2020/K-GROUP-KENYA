import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Download, Share2, Heart, Clock, Headphones } from "lucide-react"

const MusicSection = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)

  const featuredMixes = [
    {
      id: 1,
      title: "Sunday Worship Experience",
      duration: "45:30",
      genre: "Contemporary Gospel",
      plays: "12.5K",
      likes: "890",
      description: "A powerful blend of contemporary gospel hits perfect for Sunday service",
      coverColor: "from-primary to-primary-glow"
    },
    {
      id: 2,
      title: "Revival Fire Mix",
      duration: "38:45",
      genre: "Traditional Gospel",
      plays: "8.2K", 
      likes: "654",
      description: "High-energy traditional gospel music to ignite the spirit",
      coverColor: "from-secondary to-yellow-400"
    },
    {
      id: 3,
      title: "Youth Praise Party",
      duration: "52:15",
      genre: "Urban Gospel",
      plays: "15.7K",
      likes: "1.2K",
      description: "Urban gospel beats that connect with the younger generation",
      coverColor: "from-accent to-blue-400"
    },
    {
      id: 4,
      title: "Wedding Worship",
      duration: "41:20",
      genre: "Romantic Gospel",
      plays: "6.8K",
      likes: "445",
      description: "Beautiful gospel ballads perfect for wedding ceremonies",
      coverColor: "from-pink-500 to-rose-400"
    }
  ]

  const genres = [
    "Contemporary Gospel",
    "Traditional Gospel", 
    "Urban Gospel",
    "Praise & Worship",
    "Gospel Hip-Hop",
    "African Gospel"
  ]

  const togglePlay = (mixId: number) => {
    if (currentlyPlaying === mixId) {
      setCurrentlyPlaying(null)
    } else {
      setCurrentlyPlaying(mixId)
    }
  }

  return (
    <section id="music" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-divine">Music</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the divine through carefully crafted gospel mixes that inspire worship, 
            build faith, and bring communities together in praise.
          </p>
          
          {/* Genre Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {genres.map((genre, index) => (
              <Badge key={index} variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {genre}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Mixes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredMixes.map((mix) => (
            <Card key={mix.id} className="card-divine overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  {/* Album Art */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${mix.coverColor} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 w-full h-full"
                      onClick={() => togglePlay(mix.id)}
                    >
                      {currentlyPlaying === mix.id ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8" />
                      )}
                    </Button>
                  </div>

                  {/* Mix Info */}
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {mix.title}
                    </CardTitle>
                    <div className="space-y-1">
                      <Badge variant="secondary" className="text-xs">
                        {mix.genre}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{mix.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Headphones className="w-4 h-4" />
                          <span>{mix.plays}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{mix.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  {mix.description}
                </p>
                
                {/* Progress Bar (if playing) */}
                {currentlyPlaying === mix.id && (
                  <div className="mb-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full w-1/3 animate-pulse"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1:23</span>
                      <span>{mix.duration}</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant={currentlyPlaying === mix.id ? "divine" : "outline"}
                    size="sm"
                    onClick={() => togglePlay(mix.id)}
                    className="flex-1"
                  >
                    {currentlyPlaying === mix.id ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Playing
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Play
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Music Platform Links */}
        <div className="text-center">
          <Card className="card-divine max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-divine">Stream on Your Favorite Platform</h3>
              <p className="text-muted-foreground mb-8">
                Find DJ Kach's gospel mixes on all major streaming platforms and social media channels.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['Spotify', 'Apple Music', 'SoundCloud', 'YouTube'].map((platform) => (
                  <Button key={platform} variant="outline" className="h-12">
                    {platform}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="divine" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download All Mixes
                </Button>
                <Button variant="red" size="lg">
                  Subscribe for Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default MusicSection