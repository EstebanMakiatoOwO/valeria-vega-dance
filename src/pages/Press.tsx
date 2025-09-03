import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { usePressItems } from "../components/usePressItems";

const Press = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { loadedPressItems, isLoading, pressItems } = usePressItems();

  // Patrón de spans compacto (12 cols en lg): sin full-width, variedad pero discreta
  const spanClass = (i: number) => {
    const pattern = [
      "md:col-span-3 lg:col-span-4", // compacto
      "md:col-span-3 lg:col-span-5", // un poco más ancho
      "md:col-span-6 lg:col-span-6", // medio (media fila)
      "md:col-span-3 lg:col-span-4",
      "md:col-span-3 lg:col-span-5",
      "md:col-span-6 lg:col-span-6",
    ];
    return pattern[i % pattern.length];
  };

  // Aspect ratios moderados (más anchos que altos, pero no extremos)
  const aspectClass = (t: "article" | "video") =>
    t === "video"
      ? "aspect-[16/9] md:aspect-[3/2]"
      : "aspect-[4/3] md:aspect-[3/2]";

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-right mb-12 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8">
            Prensa
          </h1>
          <div className="w-24 h-px bg-cultural ml-auto mr-0 opacity-60" />
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-10">
          {(loadedPressItems.length > 0 ? loadedPressItems : pressItems).map((item, i) => {
            const video = item.type === "video";
            const span = spanClass(i);
            const aspect = aspectClass(video ? "video" : "article");

            return (
              <div
                key={
                  item.type === "article"
                    ? (item as any).headline
                    : (item as any).title
                }
                className={span}
              >
                <div
                  className="group relative overflow-hidden rounded-2xl bg-card/25 backdrop-blur-sm border border-border/30 shadow-sm
                             transition-all duration-300 hover:shadow-md hover:-translate-y-[1px]
                             [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
                >
                  {/* Media */}
                  <div className={`${aspect} relative`}>
                    <img
                      src={
                        video ? (item as any).thumbnail : (item as any).image
                      }
                      alt={
                        item.type === "article"
                          ? (item as any).headline
                          : (item as any).title
                      }
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.015]"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Si la imagen falla, usar una imagen de respaldo de unsplash
                        const target = e.target as HTMLImageElement;
                        target.src = `https://source.unsplash.com/random/800x600?${
                          video ? 'video,play' : 'newspaper,article'
                        }`;
                      }}
                    />

                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] tracking-wide
                                        bg-black/55 text-white border border-white/10 backdrop-blur-sm"
                      >
                        {video ? "Video" : "Artículo"}
                      </span>
                    </div>

                    {/* Overlay sutil */}
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Play en videos */}
                    {video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative pointer-events-none">
                          <div className="absolute inset-0 rounded-full blur-xl bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <PlayCircle
                            className="w-12 h-12 text-white/90 group-hover:text-white transition-transform duration-300 group-hover:scale-110 relative z-10"
                            strokeWidth={1.4}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Preview box compacto */}
                  <div className="px-4 -mt-5">
                    <div
                      className="rounded-xl bg-background/85 backdrop-blur-md border border-border/30 shadow-sm
                                    p-4 transition-shadow duration-300 group-hover:shadow-md"
                    >
                      {item.type === "article" ? (
                        <>
                          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                            {(item as any).editorial}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold text-primary mt-1 mb-1 leading-snug">
                            {(item as any).headline}
                          </h3>
                        </>
                      ) : (
                        <h3 className="text-base md:text-lg font-serif font-light text-primary leading-snug [text-wrap:balance] break-words">
                          {item.title}
                        </h3>
                      )}
                      <p className="mt-1.5 text-[13px] md:text-sm text-muted-foreground font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* CTA */}
                      <div className="mt-3 flex">
                        {video ? (
                          <button
                            onClick={() =>
                              setSelectedVideo((item as any).videoId)
                            }
                            className="ml-auto inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 text-xs md:text-sm
                                       text-accent hover:bg-accent/10 transition-colors"
                            aria-label="Ver video"
                          >
                            Ver video
                          </button>
                        ) : (
                          <a
                            href={(item as any).url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 text-xs md:text-sm
                                       text-accent hover:bg-accent/10 transition-colors"
                            aria-label="Leer artículo"
                          >
                            Leer artículo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Click sobre toda la tarjeta */}
                  <a
                    href={video ? undefined : (item as any).url}
                    target={video ? undefined : "_blank"}
                    rel={video ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (video) {
                        e.preventDefault();
                        setSelectedVideo((item as any).videoId);
                      }
                    }}
                    className="absolute inset-0"
                    aria-hidden="true"
                  />
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>

      {/* Video Dialog */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="max-w-5xl p-0">
          <div className="aspect-video w-full">
            <iframe
              src={selectedVideo ? `https://www.youtube.com/embed/${selectedVideo}` : ""}
              title="Video"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Press;
