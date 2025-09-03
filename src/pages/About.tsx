import valeria from "../assets/fotos/vale_bn.webp";
import acerca_de from "../assets/shows/rebozo/valeria-rebozo.jpg";

const About = () => {
  const sections = [
    {
      image: valeria,
      alt: "Valeria Vega Solórzano",
      paragraphs: [
        `Valeria Vega Solórzano es una artista escénica mexicana, con una Maestría en Teatro y Artes Escénicas por UNIR y una Licenciatura en Danza por la UDG. Su formación incluye estudios en ballet clásico en el Centro Pro Ballet de Michoacán, ISTD y la Escuela Nacional de Danza Clásica del INBA, actuación, canto y dramaturgia.`,
        `Desde 2006, dirige su sello iO Artes Escénicas, con el que ha diseñado y producido 14 espectáculos a la fecha. Su trabajo se caracteriza por integrar lenguaje teatral y dancístico, creando narrativas cautivadoras. Entre sus obras destacan "Malena Baila el Tango", "iO Tango", "Detrás de mí- De mujeres y Tangos", "La Dama del Puerto" y "Rebozo".`,
        `Su carrera ha sido multifascética, abarcando el Teatro Musical (Fantasma de la Opera, José el soñador, Bésame mucho, Victor Victoria), ópera, opereta y zarzuela, teatro de cámara, teatro infantil, ballet, salsa, tango y folklor argentino y folklor mexicano.`,
      ],
    },
    {
      image: acerca_de, // puedes cambiar esta imagen por otra si lo deseas
      alt: "Valeria en escena",
      paragraphs: [
        `Ha sido reconocida como una de las mejores bailarinas de tango en México, carrera que comenzó en 1999. Fue alumna y asistente de la leyenda del Tango Carlos Gavito. Ha colaborado con compañías como "Latin Tango", "Íntimo Tango", "Malka", "Emo Tango" y "Tango y Más", realizando giras por México, Estados Unidos, Buenos Aires y China.`,
        `Ejerce la docencia de la danza, especialmente Tango desde hace 20 años. Su enfoque está centrado en la conexión y el trabajo técnico desde la relajación y organicidad.`,
        `Como coreógrafa ha trabajado para Opera Prima, Bárbara Colio y los espectáculos de iO Artes escénicas principalmente.`,
      ],
    },
  ];

  return (
    <div
      className="min-h-screen bg-background pt-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <header
          className="text-center mb-16 animate-slide-up motion-reduce:animate-none"
          style={{
            animationDuration: "400ms",
            animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            animationDelay: "80ms",
            willChange: "transform, opacity",
          }}
        >
          <h1
            id="about-heading"
            className="text-5xl md:text-7xl font-serif font-light text-primary mb-8 text-right leading-none tracking-tight"
          >
            Acerca de
          </h1>
          <div className="w-24 h-px bg-cultural ml-auto mr-0 opacity-60" />
        </header>

        {/* Secciones alternadas (2) */}
        <div className="space-y-16 lg:space-y-24">
          {sections.map((block, i) => {
            const isReversed = i % 2 === 1; // alterna imagen/texto
            return (
              <section
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Imagen sin bordes */}
                <figure
                  className={`relative lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"} motion-safe:animate-fade-in`}
                  style={{
                    animationDelay: `${120 + i * 120}ms`,
                    animationDuration: "420ms",
                    animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]">
                      <img
                        src={block.image}
                        alt={block.alt}
                        className="w-full h-full object-cover select-none"
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        draggable={false}
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                    </div>
                  </div>
                </figure>

                {/* Texto */}
                <div
                  className={`lg:col-span-7 ${isReversed ? "lg:order-1" : "lg:order-2"} motion-safe:animate-fade-in`}
                  style={{
                    animationDelay: `${180 + i * 120}ms`,
                    animationDuration: "420ms",
                    animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                    willChange: "transform, opacity",
                  }}
                >
                  <div className="space-y-6 md:space-y-7">
                    {block.paragraphs.map((p, k) => (
                      <p
                        key={k}
                        className="text-foreground/80 font-light leading-relaxed text-base md:text-lg [text-wrap:pretty]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
