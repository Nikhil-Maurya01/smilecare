import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { MessageCircle, Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react';

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the date for better readability
    const formattedDate = new Date(formData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Create WhatsApp message with all form data
    let whatsappMessage = `*New Appointment Request*\n\n`;
    whatsappMessage += `*Full Name:* ${formData.name}\n`;
    whatsappMessage += `*Phone Number:* ${formData.phone}\n`;
    whatsappMessage += `*Email:* ${formData.email}\n`;
    whatsappMessage += `*Preferred Date:* ${formattedDate}\n`;
    
    if (formData.message.trim()) {
      whatsappMessage += `*Message:* ${formData.message}\n`;
    }
    
    whatsappMessage += `\nThank you for choosing SmileCare Dental Clinic!`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
    
    // Clear the form
    setFormData({ name: '', phone: '', email: '', date: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi, I would like to book an appointment', '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Dental Appointment Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Schedule your visit and let us take care of your smile. Fill out the form below or reach out via WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Form Card */}
            <Card className="md:col-span-2 p-8 rounded-2xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline mr-2" size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline mr-2" size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline mr-2" size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline mr-2" size={16} />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline mr-2" size={16} />
                    Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your dental concerns or questions"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Schedule Appointment
                </Button>
              </form>
            </Card>

            {/* WhatsApp Quick Book */}
            <Card className="p-8 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-center space-y-6 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="text-white" size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Quick Booking
                </h3>
                <p className="text-gray-600">
                  Prefer instant messaging? Book your appointment directly via WhatsApp
                </p>
              </div>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Us
              </Button>
              <div className="text-sm text-gray-500">
                Available Mon-Sat, 9AM-7PM
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
