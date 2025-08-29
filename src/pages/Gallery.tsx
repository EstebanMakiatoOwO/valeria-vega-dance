import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import { PlayCircle, ChevronLeft, ChevronRight, X } from "lucide-react";

// Import images originales

// Fotos generales
import horacioValeBn from "@/assets/fotos/horacio_vale_bn.jpg";
import horacioValeColor from "@/assets/fotos/horacio_vale_color.jpg";
import pose1 from "@/assets/fotos/pose1.png";
import valeBn from "@/assets/fotos/vale_bn.webp";
import valeriaPortada from "@/assets/fotos/valeria-portada.jpg";
import tangoOleo from "@/assets/varios/tango-oleo.jpeg";
import queQuilombo from "@/assets/varios/que-quilombo.jpeg";

// Import extra para thumbnails de videos

// Shows - detras
import detrasAbrazo from "@/assets/shows/detras/detras-abrazo.jpeg";
import detrasPiso from "@/assets/shows/detras/detras-piso.jpeg";
import detrasPose from "@/assets/shows/detras/detras-pose.jpeg";
import valeMesa from "@/assets/shows/detras/vale-mesa.jpg";

// Shows - dama
import damaPuerto from "@/assets/shows/dama/dama-del-puerto.jpg";

// Shows - rebozo
import rebozo from "@/assets/shows/rebozo/rebozo.jpg";
import valeRebozo from "@/assets/shows/rebozo/valeria-rebozo.jpg";

// Shows - notas
import notasTango from "@/assets/shows/notas/notas-del-tango.jpeg";

// Shows - colores
import coloresDelTango from "@/assets/shows/colores/colores-del-tango.jpeg";
import parejasColores from "@/assets/shows/colores/parejas_colores.jpg";

interface VideoItem {
  type: "video";
  id: string; // YouTube ID
  title: string;
  thumbnail: string; // local thumb
}

interface ImageItem {
  type: "image";
  src: string;
  title?: string;
}

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // Por defecto: FOTOS
  const [section, setSection] = useState<"all" | "videos" | "images">("images");

  // "Peek" mobile
  const [peekImageIndex, setPeekImageIndex] = useState<number | null>(null);
  const [peekVideoIndex, setPeekVideoIndex] = useState<number | null>(null);
  const peekImgTimer = useRef<number | null>(null);
  const peekVidTimer = useRef<number | null>(null);

  const videos: VideoItem[] = [
    {
      type: "video",
      id: "PQM7bVGOrxM",
      title: "Valeria",
      thumbnail: valeriaPortada,
    },
    {
      type: "video",
      id: "AHz-Shfcef8",
      title: "Rebozo",
      thumbnail: valeRebozo,
    },
    {
      type: "video",
      id: "z-JPHGXkzNo",
      title: "Valeria y Horacio",
      thumbnail: horacioValeColor,
    },
    {
      type: "video",
      id: "pNxXRVUsSlo",
      title: "La Dama del Puerto",
      thumbnail: damaPuerto,
    },
    {
      type: "video",
      id: "nznr1-riZ3Q",
      title: "Performance",
      thumbnail: detrasPose,
    },
    {
      type: "video",
      id: "ohZYsXG5qK0",
      title: "Valeria en Morelia",
      thumbnail: detrasPiso,
    },
    {
      type: "video",
      id: "vrsSZRXlyXY",
      title: "Valeria y Froyamel",
      thumbnail: notasTango,
    },
    {
      type: "video",
      id: "OhZinnRN7vg",
      title: "Valeria y Abdel",
      thumbnail: parejasColores,
    },
    {
      type: "video",
      id: "VWwaL_ZxK-E",
      title: "Juerga por Tangos",
      thumbnail: valeBn,
    },
    {
      type: "video",
      id: "AbbQDFGEJF4",
      title: "Tango Óleo sobre Tela",
      thumbnail: tangoOleo,
    },
    {
      type: "video",
      id: "8f_CkDVLHxo",
      title: "Qué Quilombo",
      thumbnail: queQuilombo,
    },
  ];

  const images: ImageItem[] = [
    // Fotos generales
    { type: "image", src: valeBn },
    { type: "image", src: valeriaPortada },
    { type: "image", src: horacioValeBn },
    { type: "image", src: horacioValeColor },
    { type: "image", src: pose1 },

    // Shows - detras
    { type: "image", src: valeMesa },
    { type: "image", src: detrasAbrazo },
    { type: "image", src: detrasPiso },
    { type: "image", src: detrasPose },
    // Shows - dama
    { type: "image", src: damaPuerto },
    // Shows - rebozo
    { type: "image", src: rebozo },
    { type: "image", src: valeRebozo },
    // Shows - colores
    { type: "image", src: parejasColores },
  ];

  // Navegación modal (solo images)
  const onNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };
  const onPrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + images.length) % images.length
    );
  };

  // Navegación por teclado cuando hay imagen abierta
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === "ArrowRight") onNext();
        if (e.key === "ArrowLeft") onPrevious();
        if (e.key === "Escape") setSelectedImageIndex(null);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [selectedImageIndex]);

  // Limpia timers al desmontar
  useEffect(() => {
    return () => {
      if (peekImgTimer.current) window.clearTimeout(peekImgTimer.current);
      if (peekVidTimer.current) window.clearTimeout(peekVidTimer.current);
    };
  }, []);

  const handleImageTouch = (index: number) => {
    if (peekImgTimer.current) window.clearTimeout(peekImgTimer.current);
    setPeekImageIndex(index);
    peekImgTimer.current = window.setTimeout(
      () => setPeekImageIndex(null),
      1200
    );
  };
  const handleVideoTouch = (index: number) => {
    if (peekVidTimer.current) window.clearTimeout(peekVidTimer.current);
    setPeekVideoIndex(index);
    peekVidTimer.current = window.setTimeout(
      () => setPeekVideoIndex(null),
      1200
    );
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-right mb-12 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8">
            Galería
          </h1>
          <div className="w-24 h-px bg-cultural ml-auto mr-0 opacity-60"></div>
        </div>

        {/* Filtro */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSection("images")}
            className={`px-4 py-2 rounded-full text-sm font-light border transition-all ${
              section === "images"
                ? "bg-accent/10 text-accent border-accent/30"
                : "bg-transparent text-foreground/70 border-border/40 hover:text-accent"
            }`}
          >
            Fotos
          </button>
          <button
            onClick={() => setSection("videos")}
            className={`px-4 py-2 rounded-full text-sm font-light border transition-all ${
              section === "videos"
                ? "bg-accent/10 text-accent border-accent/30"
                : "bg-transparent text-foreground/70 border-border/40 hover:text-accent"
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setSection("all")}
            className={`px-4 py-2 rounded-full text-sm font-light border transition-all ${
              section === "all"
                ? "bg-accent/10 text-accent border-accent/30"
                : "bg-transparent text-foreground/70 border-border/40 hover:text-accent"
            }`}
          >
            Todo
          </button>
        </div>

        {/* FOTOS */}
        {(section === "all" || section === "images") && (
          <section id="fotos">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-primary">
                Fotos
              </h2>
              <div className="h-px w-24 bg-cultural opacity-60" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((item, index) => (
                <div key={item.src} className="animate-fade-in">
                  <button
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    onTouchStart={() => handleImageTouch(index)}
                    data-peek={peekImageIndex === index}
                    className="group relative block overflow-hidden rounded-xl shadow-xl transition-all duration-400 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accent/40"
                  >
                    <div className="aspect-[3/4] relative">
                      <img
                        src={item.src}
                        alt={item.title || "Foto de galería"}
                        className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.03]"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-0 group-hover:opacity-100 data-[peek=true]:opacity-100 transition-opacity duration-300" />
                      {item.title && (
                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 data-[peek=true]:translate-y-0 data-[peek=true]:opacity-100 transition-all duration-300">
                          <h3 className="text-white font-serif text-base md:text-lg drop-shadow">
                            {item.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* VIDEOS */}
        {(section === "all" || section === "videos") && (
          <section id="videos" className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-primary">
                Videos
              </h2>
              <div className="h-px w-24 bg-cultural opacity-60" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((item, vIndex) => (
                <div key={item.id} className="animate-fade-in">
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(item.id)}
                    onTouchStart={() => handleVideoTouch(vIndex)}
                    data-peek={peekVideoIndex === vIndex}
                    className="group relative block overflow-hidden rounded-xl shadow-xl transition-all duration-400 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accent/40"
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.03]"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 data-[peek=true]:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="relative">
                          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 data-[peek=true]:opacity-100 transition-opacity duration-300" />
                          <PlayCircle
                            className="w-16 h-16 text-white/90 group-hover:text-white data-[peek=true]:text-white transition-transform duration-300 group-hover:scale-110 data-[peek=true]:scale-110 relative z-10"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 data-[peek=true]:translate-y-0 data-[peek=true]:opacity-100 transition-all duration-300">
                        <h3 className="text-white font-serif text-base md:text-lg drop-shadow">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </section>
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
              src={
                selectedVideo
                  ? `https://www.youtube.com/embed/${selectedVideo}`
                  : ""
              }
              title="Video"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Dialog (mejorado) */}
      <Dialog
        open={selectedImageIndex !== null}
        onOpenChange={() => setSelectedImageIndex(null)}
      >
        <DialogContent
          className="max-w-[90vw] max-h-[90vh] w-full h-full p-0 bg-black/95 border-none transition-all duration-300 ease-out animate-fade-zoom"
          // evita que el focus auto mueva la página; dejamos el foco donde esté
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <style>{`
            @keyframes fadeZoomIn {
              0% { opacity: 0; transform: scale(0.96); }
              100% { opacity: 1; transform: scale(1); }
            }
            @keyframes fadeZoomOut {
              0% { opacity: 1; transform: scale(1); }
              100% { opacity: 0; transform: scale(0.96); }
            }
            .animate-fade-zoom {
              animation: fadeZoomIn 0.32s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
          <div className="relative w-full h-full flex items-center justify-center touch-pan-y">
            {selectedImageIndex !== null && images[selectedImageIndex] && (
              <>
                <img
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].title || "Foto de galería"}
                  className="h-[85vh] w-auto object-contain rounded-lg select-none transition-all duration-300 ease-out animate-fade-zoom"
                  draggable={false}
                />

                {/* Cerrar (DialogClose) — grande, claro, con safe-area */}
                <DialogClose asChild>
                  <button
                    type="button"
                    aria-label="Cerrar"
                    className="absolute right-4 top-4 z-20 rounded-full bg-black/40 hover:bg-black/60 text-white/90
                               p-2.5 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40"
                    // top seguro para notch
                    style={{ top: "max(1rem, env(safe-area-inset-top))" }}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </DialogClose>

                {/* Prev */}
                <button
                  type="button"
                  aria-label="Anterior"
                  onClick={onPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/45 hover:bg-black/65
                             p-2.5 text-white/90 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>

                {/* Next */}
                <button
                  type="button"
                  aria-label="Siguiente"
                  onClick={onNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/45 hover:bg-black/65
                             p-2.5 text-white/90 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>

                {/* Caption */}
                {images[selectedImageIndex].title && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white text-lg md:text-xl font-serif px-3 py-1.5 bg-black/35 rounded-md backdrop-blur-sm">
                    {images[selectedImageIndex].title}
                  </div>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
