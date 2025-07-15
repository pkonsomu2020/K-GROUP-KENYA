import KGroupLogo from "/COMPANY LOGOS/K-GROUP.jpg";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const recentMedia = [
  {
    title: "K-GROUP TV Interview - May 2024",
    image: "/COMPANY LOGOS/KBRTV - WHITE.jpg"
  },
  {
    title: "Breakout Events Recap",
    image: "/COMPANY LOGOS/BREAKOUTEVENTS.jpg"
  },
  {
    title: "KBR Radio Podcast Launch",
    image: "/COMPANY LOGOS/KBRRADIO.jpg"
  }
];

const Footer = () => (
  <footer className="bg-brand-black text-white pt-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 pb-8">
      {/* About Us */}
      <div>
        <div className="flex items-center mb-4">
          <img src={KGroupLogo} alt="K-GROUP Logo" className="w-14 h-14 rounded-full border-2 border-brand-red bg-white mr-3" />
          <span className="text-2xl font-bold text-brand-red">K-GROUP KENYA</span>
        </div>
        <p className="text-white text-base">
          K-GROUP KENYA is a multidisciplinary group empowering industries, nurturing creativity, and driving innovation across Kenya and beyond. We unite media, events, automotive, education, and broadcasting under one brand.
        </p>
      </div>
      {/* Recent Media */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Media</h3>
        <ul className="space-y-4">
          {recentMedia.map((media, idx) => (
            <li key={idx} className="flex items-center">
              <img src={media.image} alt={media.title} className="w-12 h-12 rounded-lg object-cover mr-3 border border-white" />
              <div>
                <div className="font-medium text-white truncate max-w-[180px]">{media.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Map Location */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Our Location</h3>
        <div className="rounded-lg overflow-hidden border border-white">
          <iframe
            title="K-GROUP Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6333271673843!2d36.7538822!3d-1.396464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05dd2f51407f%3A0x26d21a166bf5073d!2sKACHSOUND%20MEDIA!5e0!3m2!1sen!2ske!4v1752599751010!5m2!1sen!2ske"
            width="100%"
            height="160"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    {/* Bottom Bar */}
    <div className="bg-brand-red py-4 border-t-4 border-blue-800 flex flex-col md:flex-row items-center justify-between px-4">
      <div className="text-white text-sm mb-2 md:mb-0">
        K-GROUP KENYA © {new Date().getFullYear()} | Design by <a href="https://pinchezportfoliodesign.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-gray-200">Peter Pinchez</a>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/kachsoundmedia/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><Instagram className="w-6 h-6" /></a>
        <a href="https://www.facebook.com/kachsoundntertainment/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><Facebook className="w-6 h-6" /></a>
        <a href="https://www.youtube.com/@kachsoundmedia4437" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><Youtube className="w-6 h-6" /></a>
        <a href="https://wa.me/254772082000" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><MessageCircle className="w-6 h-6" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;