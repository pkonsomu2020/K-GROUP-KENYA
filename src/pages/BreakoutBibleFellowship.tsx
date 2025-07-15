import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreakoutBibleLogo from "/COMPANY LOGOS/BREAKOUTBIBLEFELLOWSHIP.jpg";
import heroImg from "/COMPANY LOGOS/BREAKOUTBIBLEFELLOWSHIP.jpg";
import Banner from "@/components/Banner";
import { ThemeProvider } from "@/components/ThemeProvider";

const galleryImages = [
  heroImg,
  // Add more images as needed
];

const BreakoutBibleFellowship = () => (
  <div className="min-h-screen bg-background pt-16">
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
    {/* Hero Banner */}
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-8 pb-12 bg-brand-black overflow-hidden">
      <img src="/src/assets/dj-kach-hero.jpg" alt="Banner Background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="relative w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-brand-red -mt-16 mb-4 overflow-hidden">
          <img src={BreakoutBibleLogo} alt="Breakout Bible Fellowship Logo" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-2">Breakout Bible Fellowship</h1>
        <span className="text-brand-red font-bold text-2xl mb-4 block">Faith. Fellowship. Family.</span>
        <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-0 leading-relaxed">
          Breakout Bible Fellowship is a vibrant community rooted in faith, fellowship, and family. We nurture spiritual growth and meaningful connections through worship, teaching, and outreach.
        </p>
      </div>
    </section>

    {/* About Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold uppercase mb-4 text-brand-red">About Us</h2>
          <p className="text-black mb-4 text-lg text-left">
            Breakout Bible Fellowship is the spiritual and community outreach of K-GROUP KENYA, fostering faith, unity, and family through fellowship and service. We are dedicated to spiritual growth, community outreach, and building strong families through faith-based programs and events.
          </p>
          <ul className="list-disc list-inside text-black text-left">
            <li>Weekly Bible Study & Fellowship</li>
            <li>Community Service & Outreach</li>
            <li>Youth & Family Programs</li>
            <li>Faith-Based Events & Retreats</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <img src={galleryImages[0]} alt="Breakout Bible Fellowship Gallery" className="rounded-xl shadow-lg object-cover w-full h-64" />
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="py-16 px-4 bg-brand-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="brand-section-title text-white">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {galleryImages.map((img, idx) => (
            <img key={idx} src={img} alt="Breakout Bible Fellowship Gallery" className="rounded-xl shadow-lg object-cover w-full h-56" />
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-16 px-4 bg-brand-red text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Join Our Fellowship</h2>
        <p className="mb-6 text-lg">Contact us to join, volunteer, or learn more about Breakout Bible Fellowship. Grow in faith and community with us!</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="/contacts" className="brand-btn-outline">Contact Us</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="brand-btn-outline">Facebook Page</a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
export default BreakoutBibleFellowship; 