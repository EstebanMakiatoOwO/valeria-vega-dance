import { Mail, Phone, Instagram, Facebook, Music } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "valeriavegatango@gmail.com",
      href: "mailto:valeriavegatango@gmail.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "5529009002",
      href: "https://wa.me/525529009002"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@valeriavegadanza",
      href: "https://instagram.com/valeriavegadanza"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Valeria Vega Danza",
      href: "https://facebook.com/valeriavegadanza"
    },
    {
      icon: Music,
      label: "TikTok",
      value: "Valeria Vega Danza",
      href: "https://tiktok.com/@valeriavegadanza"
    }
  ];

  const images = [
    {
      src: "/src/assets/shows/dama-del-puerto.jpg",
      alt: "La Dama del Puerto",
      className: "w-[260px] h-[390px] left-[5%] top-[5%] rotate-[-3deg]"
    },
    {
      src: "/src/assets/shows/rebozo.jpg",
      alt: "Mi Tango",
      className: "w-[280px] h-[420px] left-[38%] top-[2%] rotate-[4deg] z-10"
    },
    {
      src: "/src/assets/valeria-dancer.jpg",
      alt: "Tango Oleo",
      className: "w-[240px] h-[360px] left-[15%] top-[35%] rotate-[-2deg] z-20"
    },
    {
      src: "/src/assets/tango-class.jpg",
      alt: "Que Quilombo",
      className: "w-[250px] h-[375px] left-[48%] top-[40%] rotate-[3deg] z-10"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-right mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8">
            Contacto
          </h1>
          <div className="w-24 h-px bg-cultural ml-auto mr-0 opacity-60"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-20 items-center md:items-start">
          {/* Images Gallery */}
          <div className="relative w-full md:w-3/5 h-[45rem] select-none">
            {images.map((image, index) => (
              <div 
                key={image.alt}
                className={`absolute rounded-2xl overflow-hidden shadow-2xl group hover:z-40 ${image.className}`}
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="relative h-full transform-gpu transition-all duration-700 hover:scale-105 hover:rotate-0">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-end justify-center space-y-6 py-10">
            <div className="w-full text-center md:text-right mb-12">
              <p className="text-2xl text-primary/80 font-light font-serif">
                ¿Hablamos?
              </p>
            </div>
            {contactInfo.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card/5 backdrop-blur-sm border border-border/10 rounded-full px-6 py-3 hover:bg-card/10 transition-all duration-300 flex items-center animate-fade-in w-fit hover:-translate-x-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-light">
                    {contact.value}
                  </p>
                  <div className="w-9 h-9 bg-accent/5 group-hover:bg-accent/10 rounded-full flex items-center justify-center transition-colors duration-300">
                    <contact.icon className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
