import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1758205308181-d52b41e00cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjaGVja3VwJTIwZXhhbWluYXRpb24lMjB0b29sc3xlbnwxfHx8fDE3NzI3MzIxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'General Dentistry',
    description: 'Comprehensive oral health care including checkups, cleanings, and preventive treatments.',
  },
  {
    image: 'https://images.unsplash.com/photo-1766338390573-ec092d69cdcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGVhbmluZyUyMGh5Z2llbmUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNzMyMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Teeth Cleaning',
    description: 'Professional dental cleaning to remove plaque, tartar, and stains for a healthier smile.',
  },
  {
    image: 'https://images.unsplash.com/photo-1740946121646-abedac2b13ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjB3aGl0ZSUyMHRlZXRoJTIwc21pbGV8ZW58MXx8fHwxNzcyNzMyMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Teeth Whitening',
    description: 'Advanced whitening treatments to brighten your smile and boost your confidence.',
  },
  {
    image: 'https://images.unsplash.com/photo-1771442873035-474765b40ac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50JTIwcHJvY2VkdXJlfGVufDF8fHx8MTc3MjY2ODc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions that look and function like natural teeth.',
  },
  {
    image: 'https://images.unsplash.com/photo-1643401142249-84ef35c123c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjByb290JTIwY2FuYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzcyNzMyMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Root Canal Treatment',
    description: 'Pain-free root canal therapy to save infected teeth and relieve discomfort.',
  },
  {
    image: 'https://images.unsplash.com/photo-1598531228433-d9f0cb960816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFjZXMlMjBvcnRob2RvbnRpYyUyMHRlZXRofGVufDF8fHx8MTc3MjczMjE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Braces & Invisalign',
    description: 'Orthodontic solutions to straighten teeth and create your perfect smile.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a full range of dental services to meet all your oral health needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-200 rounded-2xl group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
