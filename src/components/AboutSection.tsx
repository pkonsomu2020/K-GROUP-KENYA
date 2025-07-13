import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, Zap } from "lucide-react"

const AboutSection = () => {
  const achievements = [
    {
      icon: Heart,
      title: "Passionate Ministry",
      description: "Dedicated to spreading God's love through music and bringing communities together in worship.",
      color: "text-red-500"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in gospel music mixing and event entertainment across the region.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Connected thousands of believers through powerful music experiences and spiritual gatherings.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Dynamic Energy",
      description: "Bringing high-energy performances that inspire worship and create unforgettable moments.",
      color: "text-primary"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-divine">DJ Kach</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate gospel DJ and music minister dedicated to creating powerful worship experiences 
            that touch hearts and transform lives through the power of music and faith.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Journey in Gospel Music</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For over a decade, I've been blessed to serve the Lord through music, combining 
                  my passion for DJing with my calling to minister to God's people. What started 
                  as a hobby in church quickly became a divine mission to spread the Gospel 
                  through beats, rhythms, and melodies that inspire worship.
                </p>
                <p>
                  From intimate church gatherings to large-scale revival events, I've had the 
                  privilege of witnessing how music can break down barriers, heal hearts, and 
                  bring communities together in praise and worship.
                </p>
                <p>
                  My commitment goes beyond just playing music – it's about creating an atmosphere 
                  where the Holy Spirit can move freely and where every beat serves a purpose 
                  in glorifying God.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="divine" size="lg">
                Download Press Kit
              </Button>
              <Button variant="outline" size="lg">
                View Testimonials
              </Button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="card-divine group hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`inline-flex p-3 rounded-full bg-background ${achievement.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <Card className="card-divine max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-divine">Mission Statement</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                "To use music as a powerful tool for ministry, creating worship experiences that 
                connect people with God, build stronger communities, and inspire a new generation 
                of believers to live out their faith boldly."
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
                <Heart className="w-5 h-5 text-primary" />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default AboutSection