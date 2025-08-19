import { ExternalLink } from 'lucide-react';

const PressSection = () => {
  const pressLinks = [
    {
      title: "La Jornada - Cultura",
      url: "https://www.jornada.com.mx/2025/07/20/cultura/a05n1cul",
      description: "Artículo destacado en La Jornada"
    },
    {
      title: "El Universal - Detrás de mí, de mujeres y tangos",
      url: "https://www.eluniversal.com.mx/cultura/detras-de-mi-de-mujeres-y-tangos-en-busca-de-la-naturaleza-femenina/?utm_source=web",
      description: "En busca de la naturaleza femenina"
    },
    {
      title: "YouTube - Entrevista",
      url: "https://www.youtube.com/watch?v=xyCDWj9nMBk",
      description: "Entrevista en video sobre su trabajo artístico"
    },
    {
      title: "La Voz de Michoacán",
      url: "https://www.lavozdemichoacan.com.mx/cultura/jueves/entrevista-valeria-vega-y-la-danza-como-un-pez-en-el-agua/",
      description: "Valeria Vega y la danza como un pez en el agua"
    },
    {
      title: "YouTube - Presentación",
      url: "https://youtu.be/OrRppUcA4_s?si=IoVIi39aEgWA6ZfW",
      description: "Presentación de espectáculo"
    },
    {
      title: "Puerta Escénica - La Dama del Puerto",
      url: "https://puertaescenica.com/la-dama-del-puerto-el-tango-que-da-voz-a-las-emociones-humanas/",
      description: "El tango que da voz a las emociones humanas"
    },
    {
      title: "Puerta Escénica - Detrás de mí",
      url: "https://puertaescenica.com/?s=Detr%C3%A1s+de+mi+de+mujeres+y+tangos",
      description: "Artículo sobre 'Detrás de mí de mujeres y tangos'"
    },
    {
      title: "Mi Morelia - Rebozo",
      url: "https://mimorelia.com/noticias/morelia/con-rebozo-valeria-vega-reflexiona-acerca-de-la-vida",
      description: "Reflexión acerca de la vida a través del espectáculo Rebozo"
    },
    {
      title: "Cambio de Michoacán - Rebozo",
      url: "https://cambiodemichoacan.com.mx/2024/04/10/rebozo-una-vida-de-danza/",
      description: "Una vida de danza"
    },
    {
      title: "YouTube - Documental",
      url: "https://youtu.be/tPRuETlYaFM?si=JHlXTO4I5sn20axa",
      description: "Documental sobre su trayectoria"
    },
    {
      title: "Excélsior - Festival de Música de Morelia",
      url: "https://www.excelsior.com.mx/expresiones/la-musica-se-une-en-el-33-festival-de-musica-de-morelia/1475664",
      description: "La música se une en el 33 Festival de Música de Morelia"
    }
  ];

  return (
    <section id="press" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Prensa
          </h2>
          <div className="w-24 h-1 bg-cultural mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressLinks.map((item, index) => (
            <div key={index} className="group">
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-card hover:bg-accent/5 p-6 rounded-2xl transition-all duration-300 shadow-soft hover:shadow-elegant border border-border/50 hover:border-accent/30 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif font-semibold text-primary group-hover:text-accent transition-colors duration-300 text-lg leading-tight">
                    {item.title}
                  </h3>
                  <ExternalLink 
                    size={16} 
                    className="text-muted-foreground group-hover:text-accent transition-colors duration-300 flex-shrink-0 ml-2" 
                  />
                </div>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </p>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-accent/10 to-tango/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
              Cobertura Mediática
            </h3>
            <p className="text-foreground font-sans leading-relaxed max-w-2xl">
              El trabajo artístico de Valeria Vega Solórzano ha sido ampliamente reconocido por medios especializados en cultura y artes escénicas, destacando su contribución al tango y las artes en México.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;