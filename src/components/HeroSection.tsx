import { Button } from "@/components/ui/button"
import { Play, Calendar, Music2, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const heroSlides = [
  {
    image: "/djkach-1.jpg",
    headline: (
      <>
        <span className="text-divine">K-GROUP</span> <span className="text-red">KENYA</span>
      </>
    ),
    subheading: "Gospel Music & Ministry Brand",
    tagline: "Spreading the Gospel through divine beats and heavenly mixes. Experience worship like never before with professional music services that touch hearts and move souls.",
    ctas: [
      { label: "Listen to Mixes", icon: Play, variant: "divine" },
      { label: "Book Event", icon: Calendar, variant: "red" },
      { label: "Join Community", icon: Users, variant: "dark" },
    ],
    stats: [
      { value: "500+", label: "Events", color: "text-divine" },
      { value: "50K+", label: "Followers", color: "text-red" },
      { value: "10+", label: "Years", color: "text-primary" },
    ],
    socialProof: ["FAITH CHURCH", "GRACE MINISTRY", "REVIVAL CENTER"]
  },
  {
    image: "/djkach-2.jpg",
    headline: (
      <>
        <span className="text-divine">Heavenly</span> <span className="text-red">Mixes</span>
      </>
    ),
    subheading: "Uplifting Gospel Experiences",
    tagline: "Join the movement of praise and worship with exclusive gospel mixes and live events.",
    ctas: [
      { label: "See Events", icon: Calendar, variant: "divine" },
      { label: "Watch Videos", icon: Play, variant: "red" },
    ],
    stats: [
      { value: "100+", label: "Mixes", color: "text-divine" },
      { value: "20+", label: "Venues", color: "text-red" },
      { value: "5K+", label: "Downloads", color: "text-primary" },
    ],
    socialProof: ["GOSPEL FEST", "YOUTH REVIVAL", "WORSHIP NIGHT"]
  },
  {
    image: "/djkach-3.jpg",
    headline: (
      <>
        <span className="text-divine">Book</span> <span className="text-red">K-GROUP KENYA</span>
      </>
    ),
    subheading: "For Your Next Event",
    tagline: "Make your event unforgettable with professional gospel music services, live mixing, and spirit-filled music.",
    ctas: [
      { label: "Book Now", icon: Calendar, variant: "divine" },
      { label: "Contact", icon: Users, variant: "red" },
    ],
    stats: [
      { value: "24/7", label: "Availability", color: "text-divine" },
      { value: "100%", label: "Satisfaction", color: "text-red" },
      { value: "Top", label: "Gospel Brand", color: "text-primary" },
    ],
    socialProof: ["WEDDINGS", "CONFERENCES", "CHURCHES"]
  },
]

const HeroSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const slideCount = heroSlides.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIdx(idx => (idx + 1) % slideCount);
    }, 5000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [slideCount]);

  // Manual navigation (optional, for arrows)
  const goToSlide = (idx: number) => setActiveIdx(idx);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full h-full min-h-screen flex items-center justify-center">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${idx === activeIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ pointerEvents: idx === activeIdx ? 'auto' : 'none' }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-background/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
              </div>
              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
                <div className="space-y-4 animate-slide-up">
                  {/* Music Visualizer */}
                  <div className="flex justify-center space-x-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-primary to-primary-glow music-bar animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  {/* Main Heading */}
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                    {slide.headline}
                  </h1>
                  <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl font-semibold text-muted-foreground">
                    <Music2 className="w-6 h-6" />
                    <span>{slide.subheading}</span>
                  </div>
                </div>
                {/* Tagline */}
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
                  {slide.tagline}
                </p>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-md mx-auto py-8">
                  {slide.stats.map((stat, i) => (
                    <div className="text-center" key={i}>
                      <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {slide.ctas.map((cta, i) => {
                    // Map button labels to routes
                    let href = "/";
                    switch (cta.label) {
                      case "Listen to Mixes":
                        href = "/audio-mixes";
                        break;
                      case "Book Event":
                      case "Book Now":
                        href = "/contacts";
                        break;
                      case "Join Community":
                        href = "https://www.facebook.com/kachthedj";
                        break;
                      case "See Events":
                        href = "/events";
                        break;
                      case "Watch Videos":
                        href = "/video-mixes";
                        break;
                      case "Contact":
                        href = "/contacts";
                        break;
                      default:
                        href = "/";
                    }
                    const isExternal = href.startsWith("http");
                    return isExternal ? (
                      <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant={cta.variant}
                          size="lg"
                          className="divine-glow animate-pulse"
                        >
                          <cta.icon className="w-5 h-5 mr-2" />
                          {cta.label}
                        </Button>
                      </a>
                    ) : (
                      <Button
                        key={i}
                        variant={cta.variant}
                        size="lg"
                        className="divine-glow animate-pulse"
                        onClick={() => window.location.href = href}
                      >
                        <cta.icon className="w-5 h-5 mr-2" />
                        {cta.label}
                      </Button>
                    );
                  })}
                </div>
                {/* Social Proof */}
                <div className="pt-8">
                  <p className="text-sm text-muted-foreground mb-4">Trusted by churches and events across the region</p>
                  <div className="flex items-center justify-center space-x-8 opacity-60">
                    {slide.socialProof.map((name, i) => (
                      <div className="text-xs font-semibold" key={i}>{name}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Optional: Add manual navigation arrows or dots here */}
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default HeroSection