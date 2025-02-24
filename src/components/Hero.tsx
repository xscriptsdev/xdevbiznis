import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code2 className="w-12 h-12 text-blue-500" />
            <h1 className="text-5xl md:text-7xl font-bold">X Development</h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Crafting exceptional digital experiences through innovative web solutions
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              <a href='https://www.instagram.com/xdevelopmentteam/' target='_blank' rel="noopener noreferrer">Start Your Project</a>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <a href="mailto:xdevelopmentteam@gmail.com" className="flex items-center gap-2">
                Email Contact
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
