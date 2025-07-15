import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, Zap } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const timeline = [
  {
    year: "2010",
    title: "Founded",
    description: "K-GROUP KENYA began as a vision to unite creative industries under one faith-driven brand.",
    image: "/COMPANY LOGOS/K-GROUP.jpg"
  },
  {
    year: "2015",
    title: "Expansion",
    description: "Launched new subsidiaries in media, events, and automotive, impacting more communities.",
    image: "/COMPANY LOGOS/KACHSOUNDMEDIA.jpg"
  },
  {
    year: "2020",
    title: "Digital Era",
    description: "Embraced digital broadcasting and online outreach, reaching thousands across Kenya.",
    image: "/COMPANY LOGOS/KBRRADIO.jpg"
  },
  {
    year: "2024",
    title: "Innovation & Growth",
    description: "Continuing to empower, inspire, and serve with excellence in every sector.",
    image: "/COMPANY LOGOS/KBRTV - WHITE.jpg"
  }
]

const values = [
  {
    icon: Heart,
    title: "Excellence",
    desc: "We pursue the highest standards in all we do.",
    verse: "Colossians 3:23",
    color: "text-[#ef0b0d]"
  },
  {
    icon: Users,
    title: "Authenticity",
    desc: "We are genuine in our faith and service.",
    verse: "1 Timothy 1:5",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "Sincerity",
    desc: "We serve with honest hearts.",
    verse: "Joshua 24:14",
    color: "text-secondary"
  },
  {
    icon: Zap,
    title: "Teamwork",
    desc: "We achieve more together.",
    verse: "Ecclesiastes 4:9",
    color: "text-accent"
  }
]

const gallery = [
  "/COMPANY LOGOS/K-GROUP.jpg",
  "/COMPANY LOGOS/KACHSOUNDMEDIA.jpg",
  "/COMPANY LOGOS/KBRRADIO.jpg",
  "/COMPANY LOGOS/KBRTV - WHITE.jpg",
  "/COMPANY LOGOS/BREAKOUTEVENTS.jpg",
  "/COMPANY LOGOS/LINKSAUTOMOTORS.jpg",
  "/COMPANY LOGOS/KBRACADEMY.jpg",
  "/COMPANY LOGOS/BREAKOUTBIBLEFELLOWSHIP.jpg",
  "/banner-img.jpg"
]

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 })
  }, [])
  return (
    <section id="about" className="py-0 bg-gradient-to-br from-muted/30 to-background">
      {/* Hero Banner */}
      <div className="relative w-full h-80 md:h-96 flex items-center justify-center mb-12" data-aos="fade-up">
        <img src="/banner-img.jpg" alt="K-GROUP KENYA" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg" data-aos="zoom-in">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow text-white" data-aos="fade-up" data-aos-delay="100">Empowering Industries. Nurturing Creativity. Driving Innovation.</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10" style={{color: '#ef0b0d'}} data-aos="fade-up">Our Journey</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center flex-1"
              data-aos="fade-right"
              data-aos-delay={idx * 100}
            >
              <img src={item.image} alt={item.title} className="w-28 h-28 rounded-xl shadow-lg mb-4 object-cover border-4 border-divine" data-aos="zoom-in" data-aos-delay={100 + idx * 100} />
              <h3 className="text-xl font-semibold" style={{color: '#ef0b0d'}}>{item.year}</h3>
              <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
              <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
              {idx < timeline.length - 1 && (
                <div className="hidden md:block w-2 h-12 bg-gradient-to-b from-divine to-transparent mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-background py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary" data-aos="fade-up">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-muted rounded-xl shadow group hover:scale-105 transition-transform"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <val.icon className={`w-10 h-10 mb-3 ${val.color}`} />
              <h4 className="font-semibold text-foreground mb-1">{val.title}</h4>
              <p className="text-sm text-muted-foreground mb-1">{val.desc}</p>
              <span className="text-xs text-divine font-bold">{val.verse}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-12" data-aos="fade-up">
        <Card className="card-divine max-w-3xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-divine" data-aos="fade-right">Mission Statement</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="100">
              "To use music and creativity as powerful tools for ministry, connecting people with God, building stronger communities, and inspiring a new generation to live out their faith boldly."
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
              <Heart className="w-5 h-5 text-primary" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gallery */}
      <div className="py-12 bg-gradient-to-br from-background to-muted/30">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary" data-aos="fade-up">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`K-GROUP KENYA Gallery ${idx + 1}`}
              className="rounded-xl shadow-lg object-cover w-full h-40 md:h-48 border-2 border-divine"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection