import { useState, useEffect } from "react";

export type PressItem =
  | {
      type: "article";
      editorial: string;
      headline: string;
      url: string;
      description: string;
      image: string;
    }
  | {
      type: "video";
      title: string;
      url: string;
      description: string;
      thumbnail: string;
      videoId: string;
    };

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
    // Intentar cargar desde localStorage primero
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
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
          const videoId = url.includes("youtu.be/")
            ? url.split("youtu.be/")[1].split("?")[0]
            : url.split("v=")[1].split("&")[0];
          return {
            image: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            title: null,
            description: null,
          };
        }
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
        );
        const data = await response.json();
        const html = data.contents;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        let imagePath =
          doc
            .querySelector('meta[property="og:image"]')
            ?.getAttribute("content") ||
          doc
            .querySelector('meta[name="twitter:image"]')
            ?.getAttribute("content") ||
          doc.querySelector(".article-image img")?.getAttribute("src") ||
          doc.querySelector("article img")?.getAttribute("src");
        let ogImage = null;
        if (imagePath) {
          try {
            imagePath = imagePath.trim();
            ogImage = new URL(imagePath, url).href;
            if (!ogImage.match(/^https?:\/\//)) {
              ogImage = null;
            }
          } catch (error) {
            console.error("Invalid image URL:", imagePath);
          }
        }
        const ogTitle =
          doc
            .querySelector('meta[property="og:title"]')
            ?.getAttribute("content") ||
          doc
            .querySelector('meta[name="twitter:title"]')
            ?.getAttribute("content");
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
        let title = ogTitle;
        let description = ogDescription;
        if (article) {
          if (!title) {
            const h1 = article.querySelector("h1");
            title = h1?.textContent?.trim();
          }
          if (!description) {
            const paragraphs = Array.from(article.querySelectorAll("p"))
              .filter((p) => {
                const text = p.textContent?.trim() || "";
                return (
                  text.length > 50 &&
                  !text.includes("©") &&
                  !text.includes("Derechos reservados")
                );
              })
              .slice(0, 2);
            if (paragraphs.length > 0) {
              description =
                paragraphs
                  .map((p) => p.textContent?.trim())
                  .join(" ")
                  .substring(0, 200)
                  .split(" ")
                  .slice(0, -1)
                  .join(" ") + "...";
            }
          }
        }
        return {
          image: ogImage,
          title: title,
          description: description,
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
            const defaultImage =
              "https://source.unsplash.com/random/800x600?newspaper,article";
            if (data) {
              if (item.type === "article") {
                return {
                  ...item,
                  headline: data.title || item.headline,
                  image:
                    data.image && data.image.match(/^https?:\/\//)
                      ? data.image
                      : defaultImage,
                  description: data.description || item.description,
                };
              } else if (item.type === "video") {
                return {
                  ...item,
                  thumbnail:
                    data.image && data.image.match(/^https?:\/\//)
                      ? data.image
                      : defaultImage,
                };
              }
            }
            if (item.type === "article") {
              return {
                ...item,
                image: defaultImage,
              };
            } else {
              return {
                ...item,
                thumbnail: defaultImage,
              };
            }
          })
        );
        setLoadedPressItems(loadedItems);
        // Guardar en localStorage para futuras cargas rápidas
        localStorage.setItem("pressItemsCache", JSON.stringify(loadedItems));
      } catch (error) {
        console.error("Error loading articles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    // Siempre refresca en segundo plano
    loadArticles();
  }, []);
  return { loadedPressItems, isLoading, pressItems };
}
