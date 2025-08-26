import acerca_de from "../assets/valeria-rebozo.jpg";

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
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8 text-right">
            Acerca de
          </h1>
          <div className="w-24 h-px bg-cultural ml-auto mr-0 opacity-60"></div>
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
                loading="eager"
                decoding="async"
                width={960}
                height={1280}
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
                Valeria Vega Solórzano es una artista escénica mexicana, con una Maestría en Teatro y Artes Escénicas por UNIR y una Licenciatura en Danza por la UDG. Su formación incluye estudios en ballet clásico en el Centro Pro Ballet de Michoacán, ISTD y la Escuela Nacional de Danza Clásica del INBA, actuación, canto y dramaturgia.
              </p>

              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-lg">
                Desde 2006, dirige su sello iO Artes Escénicas, con el que ha diseñado y producido 14 espectáculos a la fecha. Su trabajo se caracteriza por integrar lenguaje teatral y dancístico, creando narrativas cautivadoras. Entre sus obras destacan "Malena Baila el Tango", "iO Tango", "Detrás de mí- De mujeres y Tangos", "La Dama del Puerto" y "Rebozo".
              </p>

              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-lg">
                Su carrera ha sido multifascética, abarcando el Teatro Musical (Fantasma de la Opera, José el soñador, Bésame mucho, Victor Victoria), ópera, opereta y zarzuela, teatro de cámara, teatro infantil, ballet, salsa, tango y folklor argentino y folklor mexicano.
              </p>

              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-lg">
                Ha sido reconocida como una de las mejores bailarinas de tango en México, carrera que comenzó en 1999. Fue alumna y asistente de la leyenda del Tango Carlos Gavito. Ha colaborado con compañías como "Latin Tango", "Íntimo Tango", "Malka", "Emo Tango" y "Tango y Más", realizando giras por México, Estados Unidos, Buenos Aires y China.
              </p>

              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-lg">
                Ejerce la docencia de la danza, especialmente Tango desde hace 20 años. Su enfoque está centrado en la conexión y el trabajo técnico desde la relajación y organicidad.
              </p>

              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-lg">
                Como coreógrafa ha trabajado para Opera Prima, Bárbara Colio y los espectáculos de iO Artes escénicas principalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
