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

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8">
            Contacto
          </h1>
          <div className="w-24 h-px bg-cultural mx-auto opacity-60 mb-8"></div>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Conecta conmigo para clases, talleres, espectáculos y colaboraciones artísticas
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-8 hover:bg-card/50 transition-all duration-300 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <contact.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif font-light text-primary group-hover:text-accent transition-colors duration-300 mb-2 text-lg">
                {contact.label}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-light">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;