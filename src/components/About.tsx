import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Trophy } from 'lucide-react';

const stats = [
  { icon: Users, value: '14', label: 'Happy Clients' },
  { icon: Target, value: '14', label: 'Projects Completed' },
  { icon: Trophy, value: '2', label: 'Awards Won' },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">About X Development</h2>
            <p className="text-gray-600 mb-6">
              We are a team of passionate developers and designers dedicated to creating
              exceptional digital experiences. With years of experience in the industry,
              we've helped businesses of all sizes achieve their digital goals.
            </p>
            <p className="text-gray-600 mb-8">
              Our approach combines cutting-edge technology with user-centered design
              principles to deliver solutions that not only look great but also perform
              exceptionally well.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}