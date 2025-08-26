import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const Press = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const pressItems = [
    {
      title: "La Jornada - Cultura",
      url: "https://www.jornada.com.mx/2025/07/20/cultura/a05n1cul",
      description: "Artículo destacado en La Jornada",
      type: "article",
      image: "/src/assets/shows/tango-oleo.jpeg"
    },
    {
      title: "El Universal - Detrás de mí, de mujeres y tangos",
      url: "https://www.eluniversal.com.mx/cultura/detras-de-mi-de-mujeres-y-tangos-en-busca-de-la-naturaleza-femenina/?utm_source=web",
      description: "En busca de la naturaleza femenina",
      type: "article",
      image: "/src/assets/shows/detras-de-mi.jpeg"
    },
    {
      title: "Entrevista - YouTube",
      url: "https://www.youtube.com/watch?v=xyCDWj9nMBk",
      description: "Entrevista en video sobre su trabajo artístico",
      type: "video",
      videoId: "xyCDWj9nMBk",
      thumbnail: "/src/assets/shows/malena-baila.jpeg"
    },
    {
      title: "La Voz de Michoacán",
      url: "https://www.lavozdemichoacan.com.mx/cultura/jueves/entrevista-valeria-vega-y-la-danza-como-un-pez-en-el-agua/",
      description: "Valeria Vega y la danza como un pez en el agua",
      type: "article",
      image: "/src/assets/shows/notas-del-tango.jpeg"
    },
    {
      title: "Presentación - YouTube",
      url: "https://youtu.be/OrRppUcA4_s?si=IoVIi39aEgWA6ZfW",
      description: "Presentación de espectáculo",
      type: "video",
      videoId: "OrRppUcA4_s",
      thumbnail: "/src/assets/shows/io-tango.jpg"
    },
    {
      title: "Puerta Escénica - La Dama del Puerto",
      url: "https://puertaescenica.com/la-dama-del-puerto-el-tango-que-da-voz-a-las-emociones-humanas/",
      description: "El tango que da voz a las emociones humanas",
      type: "article",
      image: "/src/assets/shows/dama-del-puerto.jpg"
    },
    {
      title: "Puerta Escénica - Detrás de mí",
      url: "https://puertaescenica.com/?s=Detr%C3%A1s+de+mi+de+mujeres+y+tangos",
      description: "Artículo sobre 'Detrás de mí de mujeres y tangos'",
      type: "article",
      image: "/src/assets/shows/detras-de-mi.jpeg"
    },
    {
      title: "Mi Morelia - Rebozo",
      url: "https://mimorelia.com/noticias/morelia/con-rebozo-valeria-vega-reflexiona-acerca-de-la-vida",
      description: "Reflexión acerca de la vida a través del espectáculo Rebozo",
      type: "article",
      image: "/src/assets/shows/rebozo.jpg"
    },
    {
      title: "Cambio de Michoacán - Rebozo",
      url: "https://cambiodemichoacan.com.mx/2024/04/10/rebozo-una-vida-de-danza/",
      description: "Una vida de danza",
      type: "article",
      image: "/src/assets/shows/rebozo.jpg"
    },
    {
      title: "Documental - YouTube",
      url: "https://youtu.be/tPRuETlYaFM?si=JHlXTO4I5sn20axa",
      description: "Documental sobre su trayectoria",
      type: "video",
      videoId: "tPRuETlYaFM",
      thumbnail: "/src/assets/shows/que-quilombo.jpeg"
    },
    {
      title: "Excélsior - Festival de Música de Morelia",
      url: "https://www.excelsior.com.mx/expresiones/la-musica-se-une-en-el-33-festival-de-musica-de-morelia/1475664",
      description: "La música se une en el 33 Festival de Música de Morelia",
      type: "article",
      image: "/src/assets/shows/las-orquestas.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-right mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8">
            Prensa
          </h1>
          <div className="w-24 h-px bg-cultural ml-auto mr-0 opacity-60"></div>
        </div>

        {/* Press coverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressItems.map((item, index) => (
            <div
              key={item.title}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.type === 'video' ? (
                <div 
                  className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden hover:bg-card/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl h-full"
                  onClick={() => setSelectedVideo(item.videoId)}
                >
                  <div className="aspect-[4/5] relative group overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-500">
                      <svg className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-light text-primary group-hover:text-accent transition-colors duration-300 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden hover:bg-card/50 transition-all duration-500 group transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl h-full"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif font-light text-primary group-hover:text-accent transition-colors duration-300 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-lg text-muted-foreground font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-1">
                        <svg
                          className="w-6 h-6 text-accent/60 group-hover:text-accent transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0">
          <div className="aspect-video w-full">
            <iframe
              src={selectedVideo ? `https://www.youtube.com/embed/${selectedVideo}` : ''}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Press;
