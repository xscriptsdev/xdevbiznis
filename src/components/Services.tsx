import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that deliver exceptional user experiences.',
  },
  {
    icon: Settings,
    title: 'Maintenance',
    description: 'Ongoing support and updates to keep your web applications running smoothly.',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive web development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}