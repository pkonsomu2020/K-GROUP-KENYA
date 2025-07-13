import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Home from "./Home"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;
