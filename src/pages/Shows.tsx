// Import show images
import lasOrquestasImg from "@/assets/shows/las-orquestas.jpg";
import detrasDeMiImg from "@/assets/shows/detras-de-mi.jpeg";
import rebozoImg from "@/assets/shows/rebozo.jpg";
import damaPuertoImg from "@/assets/shows/dama-del-puerto.jpg";
import mordisquitoImg from "@/assets/shows/mordisquito.jpg";
import suenoVeranoImg from "@/assets/shows/sueno-verano.jpg";
import notasTangoImg from "@/assets/shows/notas-del-tango.jpg";
import manonTangoImg from "@/assets/shows/manon-tango.jpg";
import coloresTangoImg from "@/assets/shows/colores-del-tango.jpg";
import miTangoImg from "@/assets/shows/mi-tango.jpg";
import queQuilomboImg from "@/assets/shows/que-quilombo.jpg";
import tangoOleoImg from "@/assets/shows/tango-oleo.jpg";
import ioTangoImg from "@/assets/shows/io-tango.jpg";
import juergaTangosImg from "@/assets/shows/juerga-tangos.jpg";
import malenaBailaImg from "@/assets/shows/malena-baila.jpg";
import iotango from "../assets/iotango.png";

const Shows = () => {
  const shows = [
    {
      year: "2006",
      title: "LAS ORQUESTAS",
      gradient: "from-red-500 via-rose-500 to-pink-500",
      image: lasOrquestasImg,
    },
    {
      year: "2005",
      title: "DETRÁS DE MI- DE MUJERES Y TANGOS",
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      image: detrasDeMiImg,
    },
    {
      year: "2004",
      title: "REBOZO",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      image: rebozoImg,
    },
    {
      year: "2018-2025",
      title: "LA DAMA DEL PUERTO",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      image: damaPuertoImg,
    },
    {
      year: "2027",
      title: "MORDISQUITO",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      image: mordisquitoImg,
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
      image: juergaTangosImg,
    },
    {
      year: "2006",
      title: "MALENA BAILA EL TANGO",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      image: malenaBailaImg,
    },
  ];

  return (
    <div className="min-h-screen bg-black relative pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 via-violet-500/5 to-emerald-500/5"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-16 z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light  text-primary mb-8">
            Espectáculos
          </h1>
          <div className="w-24 h-px bg-cultural mx-auto opacity-60 mb-6"></div>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Un recorrido por las producciones de iO Artes Escénicas que han
            cautivado audiencias en México y el extranjero
          </p>
        </div>

        {/* iO Artes Escénicas section */}
        <div className="mb-20 animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-sm border border-border/30">
            <div className="flex flex-col items-center">
              <img
                src={iotango}
                alt="iO Tango"
                className="w-full object-contain h-28"
              />
              <div className="w-28 h-1 bg-gradient-to-r from-[#D2B8A6] to-[#402D27] mb-6"></div>
            </div>

            <p className="text-lg text-gray-200 font-light leading-relaxed mb-6">
              Sello fundado en 2006 por Valeria Vega Solórzano que utiliza el
              lenguaje teatral y dancístico para crear espectáculos que cuentan
              historias y transportan al espectador al encuentro con sus
              pasiones desde una concepción e interpretación propias.
            </p>

            <p className="text-gray-300 font-light leading-relaxed mb-6">
              Reúne de manera independiente y por proyecto a distintos
              creadores: bailarines, músicos, iluminadores, escenógrafos,
              compositores, directores, dramaturgos, coreógrafos y diseñadores
              de vestuario como: Martha Benitez +, Libertad Mardel, Jésica
              Elizondo, Tenzing Ortega + Erika Suárez, Hasam Díaz Fierro, Erika
              Méndez, Cesar "Chacho" Guerra, Francisco de León, Eduardo Ruiz
              Saviñon, Luis Escárcega, Elisa Rodríguez, Horacio Rosso, Jacob
              Morales, entre muchos otros artistas y diseñadores.
            </p>

            <p className="text-gray-300 font-light leading-relaxed">
              A la fecha ha realizado 14 puestas en escena destacando "Malena
              baila el tango" (Foro de las Artes, CENART), iO Tango (Festival
              internacional de música de Morelia) "Detrás de mí, de mujeres y
              tangos" (Foro de las Artes, CENART y Teatro de la Danza, INBA,
              C.C. Helénico) "Mi tango", "Manon, un último tango", "Los colores
              del tango"( Los Talleres de Coyoacán), "La dama del puerto"
              (Circuito Nacional de Artes Escénicas en espacios independientes),
              "Las notas del tango" (Un Teatro), "Mordisquito" (Casa del Lago
              UNAM), "Rebozo" (PECDA 2024).
            </p>
          </div>
        </div>

        {/* Shows timeline */}
        <div>
          <h3 className="text-3xl font-serif font-light text-white mb-12 text-center">
            Cronología de Espectáculos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shows.map((show, index) => (
              <div
                key={`${show.year}-${show.title}`}
                className="group relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl hover:shadow-2xl transition-all duration-500 animate-fade-in hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${show.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${show.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                {/* Show image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${show.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>

                  {/* Year badge overlay */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-4 py-2 bg-gradient-to-r ${show.gradient} text-white text-lg font-light rounded-lg shadow-lg backdrop-blur-sm`}
                    >
                      {show.year}
                    </span>
                  </div>
                </div>

                <div className="relative p-6 space-y-4">
                  {/* Decorative line */}
                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${show.gradient} group-hover:w-24 transition-all duration-500 rounded-full`}
                  ></div>

                  {/* Title */}
                  <h4
                    className="text-lg font-serif font-light text-white leading-relaxed group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${show.gradient
                        .replace("from-", "")
                        .replace("via-", "")
                        .replace("to-", "")
                        .split(" ")
                        .map((c) => `var(--${c})`)
                        .join(", ")})`,
                    }}
                  >
                    {show.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shows;
