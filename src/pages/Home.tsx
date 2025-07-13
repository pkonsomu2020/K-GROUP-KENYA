import KGroupLogo from "/COMPANY LOGOS/K-GROUP.jpg";
import KachSoundLogo from "/COMPANY LOGOS/KACHSOUNDMEDIA.jpg";
import LinksAutoLogo from "/COMPANY LOGOS/LINKSAUTOMOTORS.jpg";
import BreakoutEventsLogo from "/COMPANY LOGOS/BREAKOUTEVENTS.jpg";
import KBRRadioLogo from "/COMPANY LOGOS/KBRRADIO.jpg";
import KBRTVLogo from "/COMPANY LOGOS/KBRTV - WHITE.jpg";
import KBRAcademyLogo from "/COMPANY LOGOS/KBRACADEMY.jpg";
import BreakoutBibleLogo from "/COMPANY LOGOS/BREAKOUTBIBLEFELLOWSHIP.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sectors = [
  { name: "Media & Broadcasting", icon: "📺" },
  { name: "Event Management", icon: "🎤" },
  { name: "Automotive Dealership", icon: "🚗" },
  { name: "Education & Skills Training", icon: "🎓" },
  { name: "Creative Arts & Entertainment", icon: "🎶" },
];

const coreValues = [
  { name: "Innovation", desc: "Always evolving with the trends" },
  { name: "Integrity", desc: "Upholding professionalism and ethics" },
  { name: "Excellence", desc: "Delivering the best in every service" },
  { name: "Community", desc: "Empowering youth and promoting local talent" },
];

const subsidiaries = [
  {
    name: "Kach Sound Media",
    logo: KachSoundLogo,
    tagline: "Sound that Moves, Beats that Inspire.",
    overview: "Kach Sound Media is the entertainment heartbeat of K-GROUP KENYA, specializing in music production, DJ services, live sound setups, and event performances.",
    link: "/kach-sound-media",
    facebook: "https://www.facebook.com/kachsoundntertainment"
  },
  {
    name: "Links Auto Motors",
    logo: LinksAutoLogo,
    tagline: "Drive the Future with Confidence.",
    overview: "Links Auto Motors is your go-to source for premium pre-owned and new vehicles. As K-GROUP’s automotive wing, it provides high-quality cars and mechanical services.",
    link: "/links-auto-motors",
    facebook: "https://www.facebook.com/linksautomotors"
  },
  {
    name: "Breakout Events",
    logo: BreakoutEventsLogo,
    tagline: "Creating Moments. Crafting Memories.",
    overview: "Breakout Events is K-GROUP’s creative arm for event management. From product launches to weddings, this team brings ideas to life with professional planning, execution, and logistics.",
    link: "/breakout-events",
    facebook: "https://www.facebook.com/profile.php?id=100069022268920"
  },
  {
    name: "KBR TV",
    logo: KBRTVLogo,
    tagline: "Broadcasting Beyond Boundaries.",
    overview: "KBR TV is a digital TV channel that curates quality programming focused on Kenyan culture, youth issues, entertainment, and business.",
    link: "/kbr-tv",
    facebook: "https://www.facebook.com/share/1GGLCd7Zps/"
  },
  {
    name: "KBR Radio",
    logo: KBRRadioLogo,
    tagline: "Voices that Resonate.",
    overview: "KBR Radio is a community-first digital and FM station dedicated to giving a voice to the voiceless. With programs spanning gospel, entertainment, social issues, and local updates.",
    link: "/kbr-radio",
    facebook: "https://www.facebook.com/profile.php?id=100063611015303"
  },
  {
    name: "Breakout Bible Fellowship",
    logo: BreakoutBibleLogo,
    tagline: "Faith. Fellowship. Family.",
    overview: "Breakout Bible Fellowship is the spiritual and community outreach arm of K-GROUP KENYA, fostering faith and unity.",
    link: "/breakout-bible-fellowship",
    facebook: "#"
  },
  {
    name: "KBR Academy",
    logo: KBRAcademyLogo,
    tagline: "From Talent to Profession.",
    overview: "KBR Academy is the training and skills development branch of K-GROUP KENYA. It focuses on nurturing future professionals in media, radio, TV production, entertainment, and digital communication.",
    link: "/kbr-academy",
    facebook: "https://www.facebook.com/profile.php?id=100075739666056"
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-background border-b border-border" data-aos="fade-up">
        <img src={KGroupLogo} alt="K-GROUP KENYA" className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-brand-red bg-background object-contain" data-aos="zoom-in" />
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4" data-aos="fade-up" data-aos-delay="100">K-GROUP KENYA</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-6" data-aos="fade-up" data-aos-delay="200">Empowering Industries. Nurturing Creativity. Driving Innovation.</h2>
        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="300">
          K-GROUP KENYA is a multidisciplinary holding company operating in Kenya with a footprint in media, automotive, events, education, and digital broadcasting. As a parent group, K-GROUP brings together diverse yet complementary ventures, each operating as an independent brand but sharing a common commitment to quality, impact, and innovation.
        </p>
      </section>

      {/* SECTORS SECTION */}
      <section className="py-12 px-4 bg-background" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="brand-section-title" data-aos="fade-right">Sectors We Operate In</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sectors.map((sector, idx) => (
              <div key={sector.name} className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <span className="text-4xl mb-2">{sector.icon}</span>
                <span className="text-lg font-semibold text-foreground">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-12 px-4 bg-background" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <h3 className="brand-section-title" data-aos="fade-right">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, idx) => (
              <div key={value.name} className="brand-card flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <span className="text-2xl font-bold text-secondary mb-2">{value.name}</span>
                <span className="text-foreground">{value.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSIDIARIES OVERVIEW SECTION */}
      <section className="py-12 px-4 bg-background" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h3 className="brand-section-title" data-aos="fade-right">Our Subsidiaries</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {subsidiaries.map((sub, idx) => (
              <div key={sub.name} className="brand-card flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <img src={sub.logo} alt={sub.name} className="w-20 h-20 object-contain rounded-full mb-4 border-2 border-brand-red" />
                <h4 className="text-xl font-bold mb-2 text-foreground">{sub.name}</h4>
                <span className="text-secondary font-semibold mb-2">{sub.tagline}</span>
                <p className="text-foreground mb-4">{sub.overview}</p>
                <div className="flex gap-2 justify-center">
                  <a href={sub.link} className="brand-btn">Learn More</a>
                  <a href={sub.facebook} target="_blank" rel="noopener noreferrer" className="brand-btn-outline">Facebook</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;