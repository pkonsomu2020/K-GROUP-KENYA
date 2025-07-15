import EventsSection from "@/components/EventsSection"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { ThemeProvider } from "@/components/ThemeProvider";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
      <div className="pt-0">
        <EventsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Events;