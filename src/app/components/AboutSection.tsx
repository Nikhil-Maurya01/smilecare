import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  'Advanced equipment and technology',
  'Gentle and caring treatment approach',
  'Affordable pricing with flexible payment plans',
  'Emergency dental care available',
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI3MzE3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dental clinic interior"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wide">
                About SmileCare
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                Your Trusted Partner in Dental Health
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              At SmileCare Dental Clinic, we are committed to providing exceptional dental care 
              in a warm and welcoming environment. With over 10 years of experience, our team of 
              skilled dentists uses the latest technology and techniques to ensure your comfort 
              and satisfaction.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that everyone deserves a healthy, beautiful smile. That's why we focus 
              on preventive care, patient education, and personalized treatment plans tailored 
              to your unique needs.
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-cyan-600" size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
