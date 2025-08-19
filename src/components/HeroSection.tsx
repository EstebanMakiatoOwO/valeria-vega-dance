import valeriaDancer from '@/assets/valeria-dancer.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Dancer Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-tango/10 to-accent/10 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-700"></div>
              <img
                src={valeriaDancer}
                alt="Valeria Vega Solórzano - Creador escénico / danza"
                className="relative w-auto h-[600px] lg:h-[700xl] object-cover rounded-2xl shadow-luxury hover:shadow-elegant transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-8 order-1 lg:order-2 lg:pl-12">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-sans font-medium mb-6">
                Creador escénico / danza
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-primary leading-tight mb-8">
                Valeria Vega
                <br />
                <span className="text-accent">Solórzano</span>
              </h1>
              
              <div className="w-24 h-1 bg-cultural mb-8 rounded-full"></div>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-sans leading-relaxed mb-12 max-w-2xl">
                Una destacada figura en el ámbito del tango y las artes escénicas en México, integrando lenguaje teatral y dancístico para crear narrativas cautivadoras.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-sans font-medium transition-all duration-300 shadow-soft hover:shadow-elegant hover:scale-105">
                  Conoce mi historia
                </button>
                <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-sans font-medium transition-all duration-300">
                  Ver espectáculos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;