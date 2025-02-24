import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <Code2 className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                X Development
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium hover:text-blue-600 transition-colors ${
                    isScrolled ? 'text-gray-600' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-white p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navItems.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}