import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import KBRTVLogo from "/COMPANY LOGOS/KBRTV - WHITE.jpg";
import heroImg from "/COMPANY LOGOS/KBRRADIO.jpg";
import Banner from "@/components/Banner";
import { ThemeProvider } from "@/components/ThemeProvider";

const galleryImages = [
  "/GALLERY/kbr tv/kbrtv 1.jpg",
  "/GALLERY/kbr tv/kbrtv 2.jpg",
  "/GALLERY/kbr tv/kbrtv 3.jpg"
];

const KBRTV = () => (
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
          <img src={KBRTVLogo} alt="KBR TV Logo" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-2">KBR TV</h1>
        <span className="text-brand-red font-bold text-2xl mb-4 block">Broadcasting Beyond Boundaries.</span>
        <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-0 leading-relaxed">
          KBR TV delivers compelling content that entertains, educates, and connects audiences. Experience a new era of broadcasting with innovative shows and live events.
        </p>
      </div>
    </section>

    {/* About Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold uppercase mb-4 text-brand-red">About Us</h2>
          <p className="text-black mb-4 text-lg text-left">
            KBR TV is the digital TV channel of K-GROUP KENYA, curating Kenyan culture, youth, entertainment, and business with authentic, local programming. We elevate regional content creators and engage the public through interviews, music, documentaries, and live coverage of events and culture.
          </p>
          <ul className="list-disc list-inside text-black text-left">
            <li>Interviews & Talk Shows</li>
            <li>Music & Entertainment</li>
            <li>Community Documentaries</li>
            <li>Live Coverage (Events, Politics, Culture)</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <img src={galleryImages[0]} alt="KBR TV Gallery" className="rounded-xl shadow-lg object-cover w-full h-64" />
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="py-16 px-4 bg-brand-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="brand-section-title text-white">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {galleryImages.map((img, idx) => (
            <img key={idx} src={img} alt="KBR TV Gallery" className="rounded-xl shadow-lg object-cover w-full h-56" />
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-16 px-4 bg-brand-red text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Watch & Engage</h2>
        <p className="mb-6 text-lg">Contact us to feature your show, partner, or learn more about KBR TV. Let’s broadcast beyond boundaries together!</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="/contacts" className="brand-btn-outline">Contact Us</a>
          <a href="https://www.facebook.com/share/1GGLCd7Zps/" target="_blank" rel="noopener noreferrer" className="brand-btn-outline">Facebook Page</a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
export default KBRTV; 