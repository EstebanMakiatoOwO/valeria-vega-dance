import acerca_de from "../assets/acerca_de_image.png";
import iotango from "../assets/iotango.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div
          className="text-center mb-20 animate-slide-up motion-reduce:animate-none"
          style={{
            animationDuration: "400ms",
            animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            animationDelay: "80ms",
            willChange: "transform, opacity",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8">
            Acerca de
          </h1>
          <div className="w-24 h-px bg-cultural mx-auto opacity-60"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Image section */}
          <div
            className="animate-fade-in lg:col-span-3 motion-reduce:animate-none"
            style={{
              animationDelay: "120ms", // antes: 0.2s
              animationDuration: "400ms",
              animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              willChange: "transform, opacity",
            }}
          >
            <div className="relative group">
              <img
                src={acerca_de}
                alt="Valeria Vega Solórzano"
                className="w-full object-cover rounded-sm h-[55vh] md:h-[65vh] lg:h-[720px]"
                loading="eager" // prioriza la hero
                decoding="async"
                width={1280} // pon aproximado del asset
                height={720}
              />
              <div className="absolute inset-0 rounded-sm"></div>
            </div>
          </div>

          {/* Text content */}
          <div
            className="space-y-8 animate-fade-in lg:col-span-2 motion-reduce:animate-none"
            style={{
              animationDelay: "180ms", // antes: 0.4s (demasiado)
              animationDuration: "400ms",
              animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              willChange: "transform, opacity",
            }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-lg">
                Valeria Vega Solórzano es una destacada figura en el ámbito del
                tango y las artes escénicas en México. Con una Maestría en
                Teatro y Artes Escénicas por UNIR y una Licenciatura en Danza
                por la UDG.
              </p>
              {/* iO Tango Logo */}
              <div className="rounded-sm overflow-hidden">
                <img
                  src={iotango}
                  alt="iO Tango"
                  className="w-full object-contain h-28"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={112}
                />
              </div>
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
                    className="flex items-center space-x-4 animate-slide-up motion-reduce:animate-none"
                    style={{
                      // antes: base 0.6 + 0.1s → se sentía lento
                      animationDelay: `${220 + index * 50}ms`,
                      animationDuration: "400ms",
                      animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                      willChange: "transform, opacity",
                    }}
                  >
                    <div className="w-1 h-1 bg-cultural rounded-full"></div>
                    <span className="text-foreground/70 font-light">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
