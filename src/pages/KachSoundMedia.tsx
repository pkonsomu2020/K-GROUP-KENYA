import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import KachSoundLogo from "/COMPANY LOGOS/KACHSOUNDMEDIA.jpg";
import heroImg from "/COMPANY LOGOS/KACHSOUNDMEDIA.jpg";
import Banner from "@/components/Banner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Phone, Smartphone, Facebook, Instagram, Youtube, Mail } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import KachSoundMediaBookingForm from "@/components/KachSoundMediaBookingForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const galleryImages = [
  ...[...Array(24)].map((_, i) => `/GALLERY/kachsound media/kachsound media ${i + 6}.jpg`)
];

const KachSoundMedia = () => (
  <div className="min-h-screen bg-background pt-16">
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
    {/* Hero Banner - match screenshot */}
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 bg-brand-black overflow-hidden">
      {/* Background image with lighter overlay */}
      <img src="/assets/dj-kach-hero.jpg" alt="Banner Background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="relative w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-brand-red mt-0 mb-4 overflow-hidden">
          <img src={KachSoundLogo} alt="Kach Sound Media" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-2">Kach Sound Media</h1>
        <span className="text-brand-red font-bold text-2xl mb-4 block">Sound that Moves, Beats that Inspire.</span>
        <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-0 leading-relaxed">
          Entertainment heartbeat of K-GROUP KENYA, specializing in music production, DJ services, live sound setups, and event performances.
        </p>
      </div>
    </section>

    {/* About Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="brand-section-title">About Us</h2>
          <p className="text-brand-black mb-4 text-lg">
            We are passionate about music, sound, and creating memorable experiences. Our team brings together top DJs, sound engineers, and event professionals to deliver excellence at every event.
          </p>
          <ul className="list-disc list-inside text-brand-black mb-4">
            <li>Professional DJing & Live Performances</li>
            <li>Sound Engineering & Equipment Hire</li>
            <li>Music Production & Promotions</li>
            <li>Artist Collaboration & Talent Management</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <img src={galleryImages[0]} alt="Kach Sound Media Event" className="rounded-xl shadow-lg object-contain max-h-[500px] mx-auto" />
          <img src={galleryImages[1]} alt="Kach Sound Media DJ" className="rounded-xl shadow-lg object-contain max-h-[500px] mx-auto" />
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="py-16 px-4 bg-brand-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="brand-section-title text-white">Gallery</h2>
        <div className="mt-8 relative">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((img, idx) => (
                <CarouselItem key={idx} className="flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Kach Sound Media Gallery ${idx + 6}`}
                    className="rounded-xl shadow-lg object-contain max-h-[500px] mx-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-20" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-20" />
          </Carousel>
        </div>
      </div>
    </section>
    {/* Contact & CTA Section */}
    <section className="py-16 px-4 bg-brand-red text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* CTA Box */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Book Us For Your Next Event</h2>
          <p className="mb-6 text-lg">Let us bring the sound and energy to your event. Contact us for bookings, collaborations, or more information.</p>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
              <a href="tel:0202113473" className="bg-white text-brand-red font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand-red" />
                020-2113473
              </a>
              <a href="tel:0772082000" className="bg-white text-brand-red font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-brand-red" />
                0772082000
              </a>
            </div>
            <a href="mailto:kachsoundmedia@gmail.com" className="bg-white text-brand-red font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition flex items-center gap-2 mt-4 md:mt-0">
              <Mail className="w-5 h-5 text-brand-red" />
              kachsoundmedia@gmail.com
            </a>
            <div className="flex gap-4 justify-center md:justify-start mt-2">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200"><Facebook className="w-8 h-8" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200"><Instagram className="w-8 h-8" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200"><Youtube className="w-8 h-8" /></a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div>
          <KachSoundMediaBookingForm />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
export default KachSoundMedia; 