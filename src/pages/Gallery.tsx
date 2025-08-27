import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { PlayCircle, ChevronLeft, ChevronRight, X } from "lucide-react";

// Import images
import tangoOleo from "@/assets/shows/tango-oleo.jpeg";
import notasTango from "@/assets/shows/notas-del-tango.jpeg";
import detrasMi from "@/assets/shows/detras-de-mi.jpeg";
import damaPuerto from "@/assets/shows/dama-del-puerto.jpg";
import ioTango from "@/assets/shows/io-tango.jpg";
import miTango from "@/assets/shows/mi-tango.jpeg";
import malenaBaila from "@/assets/shows/malena-baila.jpeg";
import queQuilombo from "@/assets/shows/que-quilombo.jpeg";
import juergaTangos from "@/assets/shows/juerga-tangos.jpg";
import lasOrquestas from "@/assets/shows/las-orquestas.jpeg";
import manonTango from "@/assets/shows/manon-tango.jpeg";
import rebozo from "@/assets/shows/rebozo.jpg";

interface VideoItem {
  type: 'video';
  id: string;
  title: string;
  thumbnail: string;
}

interface ImageItem {
  type: 'image';
  src: string;
  title?: string;
}

type GalleryItem = VideoItem | ImageItem;

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const videos: VideoItem[] = [
    {
      type: 'video',
      id: "PQM7bVGOrxM",
      title: "Performance en vivo",
      thumbnail: tangoOleo
    },
    {
      type: 'video',
      id: "AHz-Shfcef8",
      title: "Espectáculo",
      thumbnail: notasTango
    },
    {
      type: 'video',
      id: "z-JPHGXkzNo",
      title: "Presentación especial",
      thumbnail: detrasMi
    },
    {
      type: 'video',
      id: "pNxXRVUsSlo",
      title: "Danza en escena",
      thumbnail: damaPuerto
    },
    {
      type: 'video',
      id: "nznr1-riZ3Q",
      title: "Performance",
      thumbnail: ioTango
    },
    {
      type: 'video',
      id: "ohZYsXG5qK0",
      title: "Espectáculo en vivo",
      thumbnail: miTango
    },
    {
      type: 'video',
      id: "vrsSZRXlyXY",
      title: "Presentación artística",
      thumbnail: malenaBaila
    },
    {
      type: 'video',
      id: "OhZinnRN7vg",
      title: "Danza",
      thumbnail: queQuilombo
    },
    {
      type: 'video',
      id: "VWwaL_ZxK-E",
      title: "Juerga por Tangos",
      thumbnail: juergaTangos
    },
    {
      type: 'video',
      id: "AbbQDFGEJF4",
      title: "Tango Óleo sobre Tela",
      thumbnail: tangoOleo
    },
    {
      type: 'video',
      id: "8f_CkDVLHxo",
      title: "Qué Quilombo",
      thumbnail: queQuilombo
    }
  ];

  const images: ImageItem[] = [
    { type: 'image', src: damaPuerto, title: "La Dama del Puerto" },
    { type: 'image', src: detrasMi, title: "Detrás de mí" },
    { type: 'image', src: ioTango, title: "IO Tango" },
    { type: 'image', src: lasOrquestas, title: "Las Orquestas" },
    { type: 'image', src: malenaBaila, title: "Malena Baila" },
    { type: 'image', src: manonTango, title: "Manon Tango" },
    { type: 'image', src: miTango, title: "Mi Tango" },
    { type: 'image', src: notasTango, title: "Notas del Tango" },
    { type: 'image', src: queQuilombo, title: "Qué Quilombo" },
    { type: 'image', src: rebozo, title: "Rebozo" },
    { type: 'image', src: tangoOleo, title: "Tango Óleo" }
  ];

  const galleryItems: GalleryItem[] = [...videos, ...images].sort(() => Math.random() - 0.5);

  const onNext = () => {
    if (selectedImageIndex === null) return;
    const nextIndex = (selectedImageIndex + 1) % galleryItems.length;
    setSelectedImageIndex(nextIndex);
  };

  const onPrevious = () => {
    if (selectedImageIndex === null) return;
    const prevIndex = (selectedImageIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImageIndex(prevIndex);
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrevious();
        if (e.key === 'Escape') setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-right mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-primary mb-8">
            Galería
          </h1>
          <div className="w-24 h-px bg-cultural ml-auto mr-0 opacity-60"></div>
        </div>

        {/* Gallery Grid - Fixed 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.type === 'video' ? item.id : item.src}
              className="animate-fade-in"
            >
              <div 
                className="group relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
                onClick={() => {
                  if (item.type === 'video') {
                    setSelectedVideo(item.id);
                  } else {
                    setSelectedImageIndex(index);
                  }
                }}
              >
                <div className="aspect-[3/4] relative">
                  <img 
                    src={item.type === 'video' ? item.thumbnail : item.src} 
                    alt={item.title || 'Gallery'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100" />
                        <PlayCircle className="w-16 h-16 text-white/90 transition-all duration-500 transform group-hover:scale-110 relative z-10 group-hover:text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white font-serif text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
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

      {/* Image Dialog - Adjusted for better viewing */}
      <Dialog 
        open={selectedImageIndex !== null} 
        onOpenChange={() => setSelectedImageIndex(null)}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {selectedImageIndex !== null && (
              <>
                <img 
                  src={galleryItems[selectedImageIndex].type === 'video' 
                    ? galleryItems[selectedImageIndex].thumbnail 
                    : galleryItems[selectedImageIndex].src
                  }
                  alt={galleryItems[selectedImageIndex].title || 'Gallery'}
                  className="h-[85vh] w-auto object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <button
                  onClick={onPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white/70 hover:text-white transition-all"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white/70 hover:text-white transition-all"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
                {galleryItems[selectedImageIndex].title && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-serif">
                    {galleryItems[selectedImageIndex].title}
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
