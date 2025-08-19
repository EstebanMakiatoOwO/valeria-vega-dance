import { Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "valeriavegatango@gmail.com",
      href: "mailto:valeriavegatango@gmail.com"
    },
    {
      icon: MessageCircle,
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
      href: "https://facebook.com/valeria.vega.danza"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-cultural mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center space-x-4 p-6 bg-background hover:bg-accent/5 rounded-2xl transition-all duration-300 shadow-soft hover:shadow-elegant border border-border/50 hover:border-accent/30"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <method.icon size={20} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {method.label}
                </h3>
                <p className="text-muted-foreground font-sans text-sm group-hover:text-foreground transition-colors duration-300">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-accent/5 to-tango/5 p-8 lg:p-12 rounded-3xl">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
              Conecta con el Arte
            </h3>
            <p className="text-lg text-foreground font-sans leading-relaxed mb-8 max-w-2xl mx-auto">
              Si te interesa conocer más sobre mis clases, espectáculos, o colaboraciones artísticas, no dudes en contactarme. Estoy siempre abierta a nuevos proyectos y conexiones creativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:valeriavegatango@gmail.com"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-xl font-sans font-medium transition-all duration-300 shadow-soft hover:shadow-elegant hover:scale-105"
              >
                Enviar mensaje
              </a>
              <a
                href="https://wa.me/525529009002"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-xl font-sans font-medium transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground font-sans">
            También en TikTok: <span className="text-accent">Valeria Vega Danza</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;