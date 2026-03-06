import { Award, Zap, Heart, Calendar } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Experienced Dentists',
    description: 'Our team of certified professionals has years of expertise in all dental procedures.',
  },
  {
    icon: Zap,
    title: 'Modern Equipment',
    description: 'State-of-the-art technology for accurate diagnosis and effective treatments.',
  },
  {
    icon: Heart,
    title: 'Pain-Free Treatment',
    description: 'Advanced techniques and gentle care ensure comfortable, stress-free visits.',
  },
  {
    icon: Calendar,
    title: 'Same-Day Appointments',
    description: 'Flexible scheduling with same-day appointments available for urgent care.',
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wide">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Excellence in Dental Care
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're committed to providing the highest quality dental services with a patient-first approach
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:shadow-xl transition-shadow">
                  <Icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
