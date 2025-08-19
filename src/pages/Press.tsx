const Press = () => {
  const pressItems = [
    {
      title: "La Jornada - Cultura",
      url: "https://www.jornada.com.mx/2025/07/20/cultura/a05n1cul",
      description: "Artículo destacado en La Jornada",
      type: "article"
    },
    {
      title: "El Universal - Detrás de mí, de mujeres y tangos",
      url: "https://www.eluniversal.com.mx/cultura/detras-de-mi-de-mujeres-y-tangos-en-busca-de-la-naturaleza-femenina/?utm_source=web",
      description: "En busca de la naturaleza femenina",
      type: "article"
    },
    {
      title: "Entrevista - YouTube",
      url: "https://www.youtube.com/watch?v=xyCDWj9nMBk",
      description: "Entrevista en video sobre su trabajo artístico",
      type: "video",
      videoId: "xyCDWj9nMBk"
    },
    {
      title: "La Voz de Michoacán",
      url: "https://www.lavozdemichoacan.com.mx/cultura/jueves/entrevista-valeria-vega-y-la-danza-como-un-pez-en-el-agua/",
      description: "Valeria Vega y la danza como un pez en el agua",
      type: "article"
    },
    {
      title: "Presentación - YouTube",
      url: "https://youtu.be/OrRppUcA4_s?si=IoVIi39aEgWA6ZfW",
      description: "Presentación de espectáculo",
      type: "video",
      videoId: "OrRppUcA4_s"
    },
    {
      title: "Puerta Escénica - La Dama del Puerto",
      url: "https://puertaescenica.com/la-dama-del-puerto-el-tango-que-da-voz-a-las-emociones-humanas/",
      description: "El tango que da voz a las emociones humanas",
      type: "article"
    },
    {
      title: "Puerta Escénica - Detrás de mí",
      url: "https://puertaescenica.com/?s=Detr%C3%A1s+de+mi+de+mujeres+y+tangos",
      description: "Artículo sobre 'Detrás de mí de mujeres y tangos'",
      type: "article"
    },
    {
      title: "Mi Morelia - Rebozo",
      url: "https://mimorelia.com/noticias/morelia/con-rebozo-valeria-vega-reflexiona-acerca-de-la-vida",
      description: "Reflexión acerca de la vida a través del espectáculo Rebozo",
      type: "article"
    },
    {
      title: "Cambio de Michoacán - Rebozo",
      url: "https://cambiodemichoacan.com.mx/2024/04/10/rebozo-una-vida-de-danza/",
      description: "Una vida de danza",
      type: "article"
    },
    {
      title: "Documental - YouTube",
      url: "https://youtu.be/tPRuETlYaFM?si=JHlXTO4I5sn20axa",
      description: "Documental sobre su trayectoria",
      type: "video",
      videoId: "tPRuETlYaFM"
    },
    {
      title: "Excélsior - Festival de Música de Morelia",
      url: "https://www.excelsior.com.mx/expresiones/la-musica-se-une-en-el-33-festival-de-musica-de-morelia/1475664",
      description: "La música se une en el 33 Festival de Música de Morelia",
      type: "article"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8">
            Prensa
          </h1>
          <div className="w-24 h-px bg-cultural mx-auto opacity-60 mb-8"></div>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Cobertura mediática y reconocimientos de una trayectoria dedicada a las artes escénicas
          </p>
        </div>

        {/* Press coverage */}
        <div className="space-y-8">
          {pressItems.map((item, index) => (
            <div
              key={item.title}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.type === 'video' ? (
                <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg overflow-hidden hover:bg-card/50 transition-all duration-300">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-light text-primary group-hover:text-accent transition-colors duration-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-8 hover:bg-card/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-light text-primary group-hover:text-accent transition-colors duration-300 mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;