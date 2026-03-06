import { Button } from './ui/button';
import { Award, Users, CheckCircle2, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                Welcome to SmileCare Dental Clinic
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Healthy Smiles<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Start Here
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience world-class dental care with our team of expert dentists. 
              We provide gentle, personalized treatments in a modern, comfortable environment 
              to keep your smile healthy and beautiful.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToAppointment}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Book Appointment
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg rounded-full flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Consultation
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Award className="text-cyan-600" size={24} />
                  </div>
                </div>
                <div className="font-bold text-2xl text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Users className="text-cyan-600" size={24} />
                  </div>
                </div>
                <div className="font-bold text-2xl text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-cyan-600" size={24} />
                  </div>
                </div>
                <div className="font-bold text-2xl text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Certified Dentists</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMGNvbnN1bHRhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzI3MzE3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dentist with patient"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
