import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const BookingTerms = () => (
  <div className="min-h-screen bg-background">
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Booking Terms</h1>
      <p className="mb-4">These are the Booking Terms for K-GROUP KENYA. Please review them before making a booking. (Add your full booking terms here.)</p>
    </div>
    <Footer />
  </div>
);

export default BookingTerms; 