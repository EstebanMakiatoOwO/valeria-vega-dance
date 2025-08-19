import { Facebook, Instagram, Twitter, Youtube, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from "@/assets/logo.svg";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Acerca de', href: '/about' },
    { name: 'Clases', href: '/classes' },
    { name: 'Espectáculos', href: '/shows' },
    { name: 'Prensa', href: '/press' },
    { name: 'Contacto', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/valeria.vega.danza', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/valeriavegadanza', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <img 
                src={logo} 
                alt="Valeria Vega" 
                className="h-12 w-auto hover:opacity-80 transition-minimal"
              />
            </Link>
          </div>

          {/* Menu button */}
          <div className="flex items-center gap-6">
            {/* Navigation Links - visible only on xl */}
            <div className="hidden xl:block flex-1 px-12">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative font-light transition-minimal group ${
                    location.pathname === item.href 
                      ? 'text-accent' 
                      : 'text-foreground/70 hover:text-accent'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-px bg-accent transition-minimal ${
                    location.pathname === item.href 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

            {/* Social Media Icons - visible only on xl */}
            <div className="hidden xl:flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-accent transition-minimal"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Menu button - visible on screens below xl */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="xl:hidden p-2 text-primary hover:text-accent transition-minimal"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      <div 
        className={`xl:hidden absolute right-0 top-20 w-64 bg-background/95 backdrop-blur-md border-border/30 border shadow-lg rounded-bl-lg ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="divide-y divide-border/30">
          <div className="py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-3 text-base font-light transition-minimal ${
                  location.pathname === item.href 
                    ? 'text-accent' 
                    : 'text-foreground/70 hover:text-accent hover:bg-accent/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="py-4 px-6">
            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-accent transition-minimal"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
