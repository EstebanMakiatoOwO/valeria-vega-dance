import { useState, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FileText, ExternalLink, Download, X } from "lucide-react";

import lasOrquestasImg from "@/assets/varios/las-orquestas.jpeg";
import detrasDeMiImg from "@/assets/shows/detras/detras-pose.jpeg";
import rebozoImg from "@/assets/shows/rebozo/rebozo.jpg";
import damaPuertoImg from "@/assets/shows/dama/dama-del-puerto.jpg";
import suenoVeranoImg from "@/assets/shows/verano/sueno-verano.jpg";
import notasTangoImg from "@/assets/shows/notas/notas-del-tango.jpeg";
import manonTangoImg from "@/assets/shows/manon/manon-tango.jpeg";
import coloresTangoImg from "@/assets/shows/colores/colores-del-tango.jpeg";
import miTangoImg from "@/assets/varios/mi-tango.jpeg";
import queQuilomboImg from "@/assets/varios/que-quilombo.jpeg";
import tangoOleoImg from "@/assets/varios/tango-oleo.jpeg";
import ioTangoImg from "@/assets/shows/io/io-tango.jpg";
import juergaTangosImg from "@/assets/varios/juerga-tangos.jpg";
import malenaBailaImg from "@/assets/shows/malena/malena-baila.jpeg";
import valeBnImg from "@/assets/fotos/vale_bn.webp";

type ShowItem = {
  year: string;
  title: string;
  gradient: string; // Tailwind gradient classes: "from-.. via-.. to-.."
  image: string;
  pdf?: string; // Ruta al PDF si existe (e.g., "/pdfs/detras-de-mi.pdf")
};

const Shows = () => {
  const [open, setOpen] = useState(false);
  const [currentShow, setCurrentShow] = useState<ShowItem | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const shows: ShowItem[] = [
    {
      year: "2026",
      title: "LAS ORQUESTAS",
      gradient: "from-red-500 via-rose-500 to-pink-500",
      image: lasOrquestasImg,
      // pdf: "/pdfs/las-orquestas.pdf",
    },
    {
      year: "2025",
      title: "DETRÁS DE MI\n DE MUJERES Y TANGOS",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      image: detrasDeMiImg,
      pdf: "/pdfs/detras-de-mi.pdf",
    },
    {
      year: "2024",
      title: "REBOZO",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      image: rebozoImg,
      pdf: "/pdfs/rebozo.pdf",
    },
    {
      year: "2018-2025",
      title: "LA DAMA DEL PUERTO",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      image: damaPuertoImg,
    },
    {
      year: "2016",
      title: "SUEÑO DE UNA NOCHE DE VERANO",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      image: suenoVeranoImg,
    },
    {
      year: "2015",
      title: "LAS NOTAS DEL TANGO",
      gradient: "from-violet-500 via-purple-500 to-pink-500",
      image: notasTangoImg,
    },
    {
      year: "2015",
      title: "MANON, UN ÚLTIMO TANGO",
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      image: manonTangoImg,
    },
    {
      year: "2014",
      title: "LOS COLORES DEL TANGO",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      image: coloresTangoImg,
    },
    {
      year: "2013",
      title: "MI TANGO",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      image: miTangoImg,
    },
    {
      year: "2010",
      title: "QUÉ QUILOMBO, TANGO, TEATRO Y CABARET",
      gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
      image: queQuilomboImg,
    },
    {
      year: "2009",
      title: "TANGO, ÓLEO SOBRE TELA",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      image: tangoOleoImg,
    },
    {
      year: "2008",
      title: "iO TANGO",
      gradient: "from-red-600 via-rose-600 to-pink-600",
      image: ioTangoImg,
    },
    {
      year: "2007",
      title: "JUERGA POR TANGOS",
      gradient: "from-purple-600 via-violet-600 to-indigo-600",
      image: valeBnImg,
    },
    {
      year: "2006",
      title: "MALENA BAILA EL TANGO",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      image: malenaBailaImg,
    },
  ];

  const pdfUrl = useMemo(() => currentShow?.pdf ?? null, [currentShow]);

  function openPdf(show: ShowItem) {
    if (!show.pdf) return;
    setCurrentShow(show);
    setPdfError(null);
    setPdfLoading(true);
    setOpen(true);
  }

  return (
    <div className="min-h-screen bg-black relative pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 via-violet-500/5 to-emerald-500/5" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-16 z-10">
        {/* Header */}
        <div className="text-right mb-16 animate-slide-up">
          <h1 className="font-serif tracking-tight text-5xl md:text-7xl font-light text-white mb-6">
            Espectáculos
          </h1>
          <div className="w-24 h-px bg-cultural ml-auto mr-0 opacity-60 mb-6" />
        </div>

        {/* iO Artes Escénicas section */}
        <div className="mb-20 animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-sm border border-border/30">
            <div className="space-y-6">
              <p className="font-sans text-[17px] leading-relaxed text-gray-200">
                Valeria Vega Solórzano funda con Mario Fratta en 2006 iO Artes
                Escénicas. Utiliza el lenguaje teatral y dancístico para crear
                espectáculos que cuentan historias y transportan al espectador
                al encuentro con sus pasiones desde una concepción e
                interpretación propias.
              </p>
              <p className="font-sans text-[17px] leading-relaxed text-gray-300">
                Reúne de manera independiente y por proyecto a distintos
                creadores: bailarines, músicos, iluminadores, escenógrafos,
                compositores, directores, dramaturgos, coreógrafos y diseñadores
                de vestuario...
              </p>
            </div>
          </div>
        </div>

        {/* Shows timeline */}
        <div>
          <h3 className="font-serif tracking-tight text-3xl md:text-4xl font-light text-white mb-12 text-right">
            Producciones
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shows.map((show, index) => {
              const isClickable = Boolean(show.pdf);
              return (
                <div
                  key={`${show.year}-${show.title}`}
                  role={isClickable ? "button" : undefined}
                  tabIndex={isClickable ? 0 : -1}
                  onClick={() => isClickable && openPdf(show)}
                  onKeyDown={(e) => {
                    if (!isClickable) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openPdf(show);
                    }
                  }}
                  className={[
                    "group relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-500 animate-fade-in",
                    isClickable
                      ? "hover:shadow-2xl hover:scale-[1.02] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      : "opacity-90",
                  ].join(" ")}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={
                    isClickable ? `Abrir carpeta de ${show.title}` : undefined
                  }
                >
                  {/* Show image */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={show.image}
                      alt={show.title}
                      className="w-full h-full object-cover object-[50%_30%] transition-transform duration-400 group-hover:scale-[1.03]"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${show.gradient} opacity-10 group-hover:opacity-0 transition-opacity duration-500`}
                    />

                    {/* Year badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/10 text-white text-sm font-medium tracking-wide rounded-md border border-white/20 backdrop-blur-sm">
                        {show.year}
                      </span>
                    </div>

                    {/* Subtle 'carpeta' hint only if clickable */}
                    {isClickable && (
                      <div className="absolute bottom-4 right-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs tracking-wide rounded-md border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <FileText className="w-3.5 h-3.5" />
                          Carpeta
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="relative p-6 space-y-4">
                    <div
                      className={`w-16 h-1 bg-gradient-to-r ${show.gradient} group-hover:w-24 transition-all duration-500 rounded-full`}
                    />
                    <h4 className="font-serif tracking-tight text-xl md:text-2xl font-normal text-white leading-snug whitespace-pre-line">
                      {show.title}
                    </h4>
                    {/* No mostrar mensaje si no hay carpeta disponible */}
                  </div>

                  {/* Outer glow on hover */}
                  <div
                    className={`pointer-events-none absolute -inset-1 bg-gradient-to-r ${show.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal para PDF */}
      <Dialog
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) {
            setPdfLoading(false);
            setPdfError(null);
            setCurrentShow(null);
          }
        }}
      >
        <DialogContent className="max-w-[min(1400px,98vw)] w-[98vw] h-[92vh] p-0 overflow-hidden bg-zinc-950/90 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl">
          {/* Botones de acción: Descargar, Abrir en pestaña, Cerrar */}
          <div className="absolute top-3 right-3 z-20 flex gap-2">
            {pdfUrl && (
              <>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 p-2 text-white hover:bg-black/70 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label="Abrir en nueva pestaña"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 p-2 text-white hover:bg-black/70 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label="Descargar PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              </>
            )}
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/50 p-2 text-white hover:bg-black/70 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Loader */}
          {pdfLoading && !pdfError && (
            <div className="absolute inset-0 grid place-items-center z-10">
              <div className="flex flex-col items-center gap-3 text-white/80">
                <div className="w-9 h-9 rounded-full border-2 border-white/20 border-t-white/70 animate-spin" />
                <span className="text-xs tracking-wide">Cargando dossier…</span>
              </div>
            </div>
          )}

          {/* Canvas PDF full-bleed */}
          {pdfUrl && (
            <iframe
              key={pdfUrl}
              src={`${pdfUrl}#toolbar=0&view=FitH`}
              title={`Dossier ${currentShow?.title ?? ""}`}
              className={[
                "absolute inset-0 w-full h-full border-0",
                pdfLoading ? "opacity-0" : "opacity-100",
              ].join(" ")}
              onLoad={() => setPdfLoading(false)}
              onError={() => {
                setPdfLoading(false);
                setPdfError("embed-failed");
                // Si es móvil, intenta descargar o abrir el PDF en nueva pestaña
                externalOrDownload(pdfUrl);
                // Si el usuario está en móvil y ocurre un error al mostrar el PDF, fuerza la descarga o abre en nueva pestaña
                function externalOrDownload(url: string) {
                  if (!url) return;
                  const isMobile =
                    typeof window !== "undefined" &&
                    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
                      navigator.userAgent
                    );
                  if (isMobile) {
                    // Intenta forzar la descarga
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = "";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  } else {
                    // En desktop, solo abre en nueva pestaña
                    window.open(url, "_blank", "noopener");
                  }
                }
                setOpen(false);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shows;
