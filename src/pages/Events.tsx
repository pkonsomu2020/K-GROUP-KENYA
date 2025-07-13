import EventsSection from "@/components/EventsSection"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-0">
        <EventsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Events;