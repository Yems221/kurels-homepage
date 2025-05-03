
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/9b04edcc-2fc3-4d95-8239-5f5022dcc439.png" 
                alt="Kurels Logo" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold text-kurels-dark-purple">Kurels<span className="text-kurels-purple">.com</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-kurels-dark-purple/80 hover:text-kurels-purple transition-colors">
              Fonctionnalités
            </a>
            <a href="#members" className="text-kurels-dark-purple/80 hover:text-kurels-purple transition-colors">
              Pour les membres
            </a>
            <a href="#special" className="text-kurels-dark-purple/80 hover:text-kurels-purple transition-colors">
              Fonctionnalités spéciales
            </a>
            <Button className="bg-kurels-purple hover:bg-kurels-purple/90 text-white">
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-kurels-dark-purple" />
              ) : (
                <Menu className="h-6 w-6 text-kurels-dark-purple" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-kurels-dark-purple/80 hover:text-kurels-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fonctionnalités
            </a>
            <a
              href="#members"
              className="block px-3 py-2 text-base font-medium text-kurels-dark-purple/80 hover:text-kurels-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pour les membres
            </a>
            <a
              href="#special"
              className="block px-3 py-2 text-base font-medium text-kurels-dark-purple/80 hover:text-kurels-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fonctionnalités spéciales
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-kurels-purple hover:bg-kurels-purple/90 text-white">
                Commencer
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
