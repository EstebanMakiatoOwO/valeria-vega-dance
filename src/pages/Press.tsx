import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useMemo, useCallback } from "react";
import { PlayCircle } from "lucide-react";
import { usePressItems } from "../components/usePressItems";

// --- Utils ---
const extractYouTubeId = (input: string): string => {
  if (/^[\w-]{10,}$/.test(input)) return input;
  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return url.pathname.slice(1);
    if (host.includes("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v) return v;
      const parts = url.pathname.split("/").filter(Boolean);
      const idx = parts.findIndex((p) =>
        ["shorts", "embed", "v"].includes(p.toLowerCase())
      );
      if (idx >= 0 && parts[idx + 1]) return parts[idx + 1];
    }
  } catch {}
  return input;
};

const ytThumbs = (id: string) => ({
  primary: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
  fallback: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
});

// detectar color claro
const isColorLight = (hex?: string) => {
  if (!hex) return false;
  const c = hex.replace("#", "");
  if (c.length !== 6) return false;
  const bigint = parseInt(c, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6;
};

// --- Layout helpers ---
type PressType = "article" | "video";
const spanClass = (i: number) => {
  const pattern = [
    "md:col-span-3 lg:col-span-4",
    "md:col-span-3 lg:col-span-5",
    "md:col-span-6 lg:col-span-6",
    "md:col-span-3 lg:col-span-4",
    "md:col-span-3 lg:col-span-5",
    "md:col-span-6 lg:col-span-6",
  ];
  return pattern[i % pattern.length];
};
const aspectClass = (t: PressType) =>
  t === "video"
    ? "aspect-[16/9] md:aspect-[3/2]"
    : "aspect-[4/3] md:aspect-[3/2]";

const IMG_SIZES = "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw";

const Press = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { loadedPressItems, isLoading, pressItems } = usePressItems();

  const items = useMemo(
    () => (loadedPressItems.length > 0 ? loadedPressItems : pressItems),
    [loadedPressItems, pressItems]
  );

  const openVideo = useCallback((idOrUrl: string) => {
    setSelectedVideo(extractYouTubeId(idOrUrl));
  }, []);

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

        {/* Loading (solo para primera pintura; luego todo es incremental) */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-10">
            {items.map((item: any, i: number) => {
              const isVideo = item.type === "video";
              const span = spanClass(i);
              const aspect = aspectClass(isVideo ? "video" : "article"); // Imagen fuente
              let imgSrc = "";
              let alt = "";
              if (isVideo) {
                imgSrc =
                  item.thumbnail &&
                  (item.thumbnail.startsWith("http") ||
                    item.thumbnail.startsWith("/"))
                    ? item.thumbnail
                    : "";
                alt = item.title || "Video";
              } else {
                imgSrc = item.image;
                alt = item.headline || item.title || "Artículo";
              }

              const publisherName =
                item.siteName || item.editorial || item.domain || "—";
              const publisherColor: string | undefined =
                item.themeColor || undefined;
              const favicon = item.favicon || "";

              return (
                <div
                  key={`${item.type}-${item.url ?? item.title}-${i}`}
                  className={`${span} [content-visibility:auto] [contain-intrinsic-size:400px_300px]`}
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-card/25 backdrop-blur-sm border border-border/30 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[1px] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]">
                    {/* Media */}
                    <div className={`${aspect} relative`}>
                      <img
                        src={imgSrc}
                        alt={alt}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-[1.015]"
                        loading="lazy"
                        decoding="async"
                        sizes={IMG_SIZES}
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement;
                          if (isVideo) {
                            const id = extractYouTubeId(
                              item.videoId ?? item.url ?? ""
                            );
                            el.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                          } else {
                            el.src =
                              "data:image/svg+xml;utf8," +
                              encodeURIComponent(
                                `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
                                  <rect width='100%' height='100%' fill='#1f2937'/>
                                  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-family='system-ui, -apple-system, Segoe UI, Roboto' font-size='42'>Prensa</text>
                                </svg>`
                              );
                          }
                        }}
                      />
                      {/* Overlay visual */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Play para video */}
                      {isVideo && (
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

                    {/* Panel de texto */}
                    <div className="px-4 -mt-5">
                      <div className="rounded-xl bg-background/85 backdrop-blur-md border border-border/30 shadow-sm p-4 transition-shadow duration-300 group-hover:shadow-md">
                        {/* Fila publisher: logo + chip con themeColor y contraste automático */}
                        <div className="flex items-center gap-2 mb-2">
                          {favicon && (
                            <img
                              src={favicon}
                              alt=""
                              className="w-5 h-5 rounded-[6px] bg-white/80 ring-1 ring-black/5"
                              loading="lazy"
                            />
                          )}
                          <span
                            className="text-xs md:text-sm font-semibold truncate max-w-[70%]"
                            style={{
                              color: publisherColor
                                ? isColorLight(publisherColor)
                                  ? "#000"
                                  : "#fff"
                                : undefined,
                              background: publisherColor
                                ? `${publisherColor}E6`
                                : undefined,
                              padding: publisherColor ? "2px 8px" : undefined,
                              borderRadius: publisherColor
                                ? "9999px"
                                : undefined,
                            }}
                            title={publisherName}
                          >
                            {publisherName}
                          </span>
                        </div>

                        {/* Headline / título */}
                        {item.type === "article" ? (
                          <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary leading-snug [text-wrap:balance]">
                            {item.headline || item.title}
                          </h3>
                        ) : (
                          <h3 className="text-base md:text-lg font-serif font-light text-primary leading-snug [text-wrap:balance] break-words">
                            {item.title}
                          </h3>
                        )}

                        {/* Descripción (larga si existe) */}
                        {(item.descriptionLong || item.description) && (
                          <p className="mt-2 text-sm md:text-[15px] text-muted-foreground/90 leading-relaxed">
                            {item.descriptionLong || item.description}
                          </p>
                        )}

                        {/* CTA */}
                        <div className="mt-3 flex">
                          {isVideo ? (
                            <button
                              onClick={() =>
                                openVideo(item.videoId ?? item.url ?? "")
                              }
                              className="ml-auto inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 text-xs md:text-sm text-accent hover:bg-accent/10 transition-colors"
                              aria-label="Ver video"
                            >
                              Ver video
                            </button>
                          ) : (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-auto inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 text-xs md:text-sm text-accent hover:bg-accent/10 transition-colors"
                              aria-label="Leer artículo"
                            >
                              Leer artículo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Click toda la tarjeta */}
                    <a
                      href={isVideo ? undefined : item.url}
                      target={isVideo ? undefined : "_blank"}
                      rel={isVideo ? undefined : "noopener noreferrer"}
                      onClick={(e) => {
                        if (isVideo) {
                          e.preventDefault();
                          openVideo(item.videoId ?? item.url ?? "");
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
              src={
                selectedVideo
                  ? `https://www.youtube-nocookie.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
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
    </div>
  );
};

export default Press;
