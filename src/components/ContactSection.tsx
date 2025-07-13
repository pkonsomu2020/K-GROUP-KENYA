import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import { useState } from 'react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 700 123 456", "+254 722 987 654"],
      description: "Call or WhatsApp for immediate response"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["bookings@djkach.com", "info@djkach.com"],
      description: "Professional inquiries and bookings"
    },
    {
      icon: MapPin,
      title: "Location", 
      details: ["Nairobi, Kenya", "Serving East Africa"],
      description: "Available for events nationwide"
    },
    {
      icon: Clock,
      title: "Availability",
      details: ["Mon-Fri: 9AM-6PM", "Weekends: By appointment"],
      description: "Flexible scheduling for events"
    }
  ]

  const socialPlatforms = [
    { name: "Facebook", icon: Facebook, handle: "@djkachofficial", color: "text-blue-600" },
    { name: "Instagram", icon: Instagram, handle: "@djkach", color: "text-pink-600" },
    { name: "YouTube", icon: Youtube, handle: "DJ Kach Gospel", color: "text-red-600" },
    { name: "WhatsApp", icon: MessageCircle, handle: "+254 700 123 456", color: "text-green-600" }
  ]

  const eventTypes = [
    "Church Service",
    "Wedding Ceremony", 
    "Corporate Event",
    "Festival/Concert",
    "Youth Event",
    "Revival Meeting",
    "Birthday Party",
    "Other"
  ]

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    eventType: '', eventDate: '', venue: '', guests: '', budget: '', message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSelect = (name, value) => {
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Your message has been sent!');
        setForm({
          firstName: '', lastName: '', email: '', phone: '',
          eventType: '', eventDate: '', venue: '', guests: '', budget: '', message: ''
        });
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to send. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-divine">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to book DJ Kach for your next event? Have questions about our services? 
            We'd love to hear from you and help create an unforgettable experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-divine">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-foreground">{detail}</p>
                        ))}
                        <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-divine">Follow the Journey</h3>
              <div className="space-y-3">
                {socialPlatforms.map((platform, index) => {
                  const Icon = platform.icon
                  return (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-background transition-colors group"
                    >
                      <Icon className={`w-5 h-5 ${platform.color} group-hover:scale-110 transition-transform`} />
                      <div>
                        <div className="font-medium text-sm">{platform.name}</div>
                        <div className="text-xs text-muted-foreground">{platform.handle}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <Card className="card-divine">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 text-green-800 p-3 rounded-full inline-flex mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours, usually much sooner!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-divine">
              <CardHeader>
                <CardTitle className="text-2xl text-divine">Book DJ Kach</CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form and we'll get back to you with a customized quote for your event.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        value={form.firstName} 
                        onChange={handleChange} 
                        placeholder="Enter your first name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        value={form.lastName} 
                        onChange={handleChange} 
                        placeholder="Enter your last name" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={handleChange} 
                        placeholder="your@email.com" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={form.phone} 
                        onChange={handleChange} 
                        placeholder="+254 700 000 000" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select 
                        onValueChange={(value) => handleSelect('eventType', value)}
                        value={form.eventType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date *</Label>
                      <Input 
                        id="eventDate" 
                        name="eventDate" 
                        type="date" 
                        value={form.eventDate} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="venue">Venue/Location *</Label>
                      <Input 
                        id="venue" 
                        name="venue" 
                        value={form.venue} 
                        onChange={handleChange} 
                        placeholder="Event venue or location" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Expected Guests</Label>
                      <Input 
                        id="guests" 
                        name="guests" 
                        type="number" 
                        value={form.guests} 
                        onChange={handleChange} 
                        placeholder="Number of guests" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select 
                      onValueChange={(value) => handleSelect('budget', value)}
                      value={form.budget}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-20k">Under KSh 20,000</SelectItem>
                        <SelectItem value="20k-50k">KSh 20,000 - 50,000</SelectItem>
                        <SelectItem value="50k-100k">KSh 50,000 - 100,000</SelectItem>
                        <SelectItem value="over-100k">Over KSh 100,000</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      placeholder="Tell us more about your event, special requirements, music preferences, etc."
                      rows={4}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="divine" size="lg" className="flex-1" type="submit" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Send Booking Request'}
                      <Mail className="w-5 h-5 ml-2" />
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our terms of service and privacy policy. 
                    We'll only use your information to respond to your inquiry.
                  </p>
                </form>
                {success && (
                  <div className="mt-6 text-center text-green-600">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="mt-6 text-center text-red-600">
                    {error}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection