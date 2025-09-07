import { useState, useEffect } from "react";

export type PressItem =
  | {
      type: "article";
      editorial: string;
      headline: string;
      url: string;
      description: string;
      descriptionLong?: string;
      image: string;
      title?: string; // fallback si no hay headline
    }
  | {
      type: "video";
      title: string;
      url: string;
      description: string;
      thumbnail: string;
      videoId: string;
    };

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
      <rect width='100%' height='100%' fill='#1f2937'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-family='system-ui, -apple-system, Segoe UI, Roboto' font-size='42'>Prensa</text>
    </svg>`
  );

const pressItems: PressItem[] = [
  {
    editorial: "La Jornada",
    headline: "Cultura",
    url: "https://www.jornada.com.mx/2025/07/20/cultura/a05n1cul",
    description: "Artículo destacado en La Jornada",
    type: "article",
    image: "",
  },
  {
    editorial: "El Universal",
    headline: "Detrás de mí, de mujeres y tangos",
    url: "https://www.eluniversal.com.mx/cultura/detras-de-mi-de-mujeres-y-tangos-en-busca-de-la-naturaleza-femenina/?utm_source=web",
    description: "En busca de la naturaleza femenina",
    type: "article",
    image: "",
  },
  {
    title: "Entrevista - YouTube",
    url: "https://www.youtube.com/watch?v=xyCDWj9nMBk",
    description: "Entrevista en video sobre su trabajo artístico",
    type: "video",
    videoId: "xyCDWj9nMBk",
    thumbnail: "",
  },
  {
    editorial: "La Voz de Michoacán",
    headline: "Valeria Vega y la danza como un pez en el agua",
    url: "https://www.lavozdemichoacan.com.mx/cultura/jueves/entrevista-valeria-vega-y-la-danza-como-un-pez-en-el-agua/",
    description: "Entrevista a Valeria Vega",
    type: "article",
    image: "",
  },
  {
    title: "Presentación - YouTube",
    url: "https://youtu.be/OrRppUcA4_s?si=IoVIi39aEgWA6ZfW",
    description: "Presentación de espectáculo",
    type: "video",
    videoId: "OrRppUcA4_s",
    thumbnail: "",
  },
  {
    editorial: "Puerta Escénica",
    headline: "La Dama del Puerto",
    url: "https://puertaescenica.com/la-dama-del-puerto-el-tango-que-da-voz-a-las-emociones-humanas/",
    description: "El tango que da voz a las emociones humanas",
    type: "article",
    image: "",
  },
  {
    editorial: "Puerta Escénica",
    headline: "Detrás de mí de mujeres y tangos",
    url: "https://puertaescenica.com/una-mirada-a-historias-de-mujeres-y-hombresdetras-de-mi-de-mujeres-y-tangos/",
    description: "Artículo sobre 'Detrás de mí de mujeres y tangos'",
    type: "article",
    image: "",
  },
  {
    editorial: "Mi Morelia",
    headline: "Rebozo",
    url: "https://mimorelia.com/noticias/morelia/con-rebozo-valeria-vega-reflexiona-acerca-de-la-vida",
    description: "Reflexión acerca de la vida a través del espectáculo Rebozo",
    type: "article",
    image: "",
  },
  {
    editorial: "Cambio de Michoacán",
    headline: "Rebozo: una vida de danza",
    url: "https://cambiodemichoacan.com.mx/2024/04/10/rebozo-una-vida-de-danza/",
    description: "Una vida de danza",
    type: "article",
    image: "",
  },
  {
    title: "Documental - YouTube",
    url: "https://youtu.be/tPRuETlYaFM?si=JHlXTO4I5sn20axa",
    description: "Documental sobre su trayectoria",
    type: "video",
    videoId: "tPRuETlYaFM",
    thumbnail: "",
  },
  {
    editorial: "Excélsior",
    headline: "Festival de Música de Morelia",
    url: "https://www.excelsior.com.mx/expresiones/la-musica-se-une-en-el-33-festival-de-musica-de-morelia/1475664",
    description: "La música se une en el 33 Festival de Música de Morelia",
    type: "article",
    image: "",
  },
];

export function usePressItems() {
  const [loadedPressItems, setLoadedPressItems] = useState<PressItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("pressItemsCache");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLoadedPressItems(parsed);
          setIsLoading(false);
        }
      } catch {}
    }

    const fetchArticleData = async (url: string) => {
      try {
        // YouTube: resolvemos miniatura y listo
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
          const videoId = url.includes("youtu.be/")
            ? url.split("youtu.be/")[1].split("?")[0]
            : url.split("v=")[1]?.split("&")[0];
          return {
            image: videoId
              ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
              : null,
            title: null,
            description: null,
            descriptionLong: null,
          };
        }

        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
        );
        const data = await response.json();
        const html = data.contents as string;

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Imagen OG
        let imagePath =
          doc
            .querySelector('meta[property="og:image"]')
            ?.getAttribute("content") ||
          doc
            .querySelector('meta[name="twitter:image"]')
            ?.getAttribute("content") ||
          doc.querySelector(".article-image img")?.getAttribute("src") ||
          doc.querySelector("article img")?.getAttribute("src");

        let resolvedImage: string | null = null;
        if (imagePath) {
          try {
            imagePath = imagePath.trim();
            const abs = new URL(imagePath, url).href;
            if (/^https?:\/\//.test(abs)) resolvedImage = abs;
          } catch {}
        }

        // Título
        const ogTitle =
          doc
            .querySelector('meta[property="og:title"]')
            ?.getAttribute("content") ||
          doc
            .querySelector('meta[name="twitter:title"]')
            ?.getAttribute("content");

        // Descripciones
        const ogDescription =
          doc
            .querySelector('meta[property="og:description"]')
            ?.getAttribute("content") ||
          doc
            .querySelector('meta[name="twitter:description"]')
            ?.getAttribute("content") ||
          doc
            .querySelector('meta[name="description"]')
            ?.getAttribute("content");

        const article =
          doc.querySelector("article") ||
          doc.querySelector(".article-content") ||
          doc.querySelector(".entry-content") ||
          doc.querySelector(".post-content") ||
          doc.querySelector("main");

        let title = ogTitle || undefined;
        let short = ogDescription || undefined;
        let long: string | undefined;

        if (article) {
          if (!title) {
            const h1 = article.querySelector("h1");
            title = h1?.textContent?.trim() || undefined;
          }
          // Intentar descripción larga combinando párrafos iniciales
          const paragraphs = Array.from(article.querySelectorAll("p"))
            .map((p) => (p.textContent || "").trim())
            .filter(
              (t) =>
                t.length > 60 &&
                !/©|Derechos reservados|Todos los derechos/i.test(t)
            );

          if (!short && paragraphs.length > 0) {
            short = paragraphs[0].slice(0, 220).replace(/\s+\S*$/, "") + "…";
          }

          if (paragraphs.length > 0) {
            const joined = paragraphs.slice(0, 3).join(" ");
            long = joined.slice(0, 480).replace(/\s+\S*$/, "") + "…";
          }
        }

        return {
          image: resolvedImage,
          title: title ?? null,
          description: short ?? null,
          descriptionLong: long ?? null,
        };
      } catch (error) {
        console.error("Error fetching article data:", error);
        return null;
      }
    };

    const loadArticles = async () => {
      setIsLoading(true);
      try {
        const loadedItems = await Promise.all(
          pressItems.map(async (item) => {
            const data = await fetchArticleData(item.url);
            if (data) {
              if (item.type === "article") {
                return {
                  ...item,
                  headline: data.title || item.headline,
                  image:
                    data.image && /^https?:\/\//.test(data.image)
                      ? data.image
                      : PLACEHOLDER,
                  description: data.description || item.description,
                  descriptionLong: data.descriptionLong || item.descriptionLong,
                };
              } else {
                // video
                return {
                  ...item,
                  thumbnail:
                    data.image && /^https?:\/\//.test(data.image)
                      ? data.image
                      : PLACEHOLDER,
                };
              }
            }
            // Fallbacks locales
            if (item.type === "article") {
              return {
                ...item,
                image: PLACEHOLDER,
              };
            } else {
              return {
                ...item,
                thumbnail: PLACEHOLDER,
              };
            }
          })
        );

        setLoadedPressItems(loadedItems);
        localStorage.setItem("pressItemsCache", JSON.stringify(loadedItems));
      } catch (error) {
        console.error("Error loading articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, []);

  return { loadedPressItems, isLoading, pressItems };
}
