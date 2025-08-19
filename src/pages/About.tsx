import acerca_de from "../assets/acerca_de_image.png";
import iotango from "../assets/iotango.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8">
            Acerca de
          </h1>
          <div className="w-24 h-px bg-cultural mx-auto opacity-60"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Image section */}
          <div
            className="animate-fade-in lg:col-span-3"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              <img
                src={acerca_de}
                alt="Valeria Vega Solórzano"
                className="w-full h-[700px] object-cover rounded-sm group-hover:shadow-minimal"
              />
              <div className="absolute inset-0 rounded-sm"></div>
            </div>
          </div>

          {/* Text content */}
          <div
            className="space-y-8 animate-fade-in lg:col-span-2"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-lg">
                Valeria Vega Solórzano es una destacada figura en el ámbito del
                tango y las artes escénicas en México. Con una Maestría en
                Teatro y Artes Escénicas por UNIR y una Licenciatura en Danza
                por la UDG.
              </p>

              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-lg">
                Desde 2006, dirige su sello iO Artes Escénicas, con el que ha
                producido 14 espectáculos. Con una carrera en teatro Musical,
                ópera, opereta y zarzuela, ha sido reconocida como una de las
                mejores bailarinas de tango en México.
              </p>

              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-lg">
                Ha colaborado con compañías como "Latin Tango", "Íntimo Tango",
                "Malka", "Emo Tango" y "Tango y Más", realizando giras por
                México, Estados Unidos, Buenos Aires y China.
              </p>
            </div>

            {/* Achievements */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-sm border border-border/30">
              <h3 className="text-2xl font-serif font-light text-primary mb-6">
                Reconocimientos
              </h3>
              <div className="space-y-4">
                {[
                  "Becaria Jeune Ballet du Quebec",
                  "Creadores Escénicos FONCA 2012",
                  "PECDA Michoacán 2023",
                  "Jurado Sistema Nacional de Creadores de Arte 2019",
                ].map((achievement, index) => (
                  <div
                    key={achievement}
                    className="flex items-center space-x-4 animate-slide-up"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="w-1 h-1 bg-cultural rounded-full"></div>
                    <span className="text-foreground/70 font-light">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* iO Tango Logo */}
            <div className="rounded-sm overflow-hidden">
              <img
                src={iotango}
                alt="iO Tango"
                className="w-full object-contain h-28"
              />
              <p className="text-accent/70 font-light mb-4">Desde 2006</p>
              <p className="text-foreground/70 font-light leading-relaxed">
                Sello fundado por Valeria que utiliza el lenguaje teatral y
                dancístico para crear espectáculos únicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
