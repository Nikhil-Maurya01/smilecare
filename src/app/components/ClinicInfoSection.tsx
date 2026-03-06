import { MapPin, Phone, Clock, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';

export function ClinicInfoSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wide">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Clinic Information
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find us easily and get in touch for any inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-cyan-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Healthcare Avenue, Medical District<br />
                    Downtown, CA 90210, United States
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-cyan-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone Number</h3>
                  <p className="text-gray-600">
                    Main: +1 (555) 123-4567<br />
                    Emergency: +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-cyan-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2 border-red-100 bg-red-50 hover:border-red-200 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Emergency Contact</h3>
                  <p className="text-gray-600">
                    24/7 Emergency Hotline<br />
                    <span className="font-semibold text-red-600">+1 (555) 911-DENT</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map */}
          <Card className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7293734754445!2d-118.24965268479386!3d34.05223598060688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SmileCare Dental Clinic Location"
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
}
