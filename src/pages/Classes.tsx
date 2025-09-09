// Import dance class images
import tangoImage from "../assets/clases/clase-tango-vale.jpeg";
import parejasColoresImage from "../assets/shows/colores/parejas_colores.jpg";
import musicalImage from "../assets/clases/latinos.jpeg";
import moovLogo from "../assets/clases/moov-studio.png";
import cuerposPoster from "../assets/clases/cuerpos-bilingues.png"; // Usar un poster de cuerpos bilingües
import { MapPin, Phone, ExternalLink } from "lucide-react";

const Classes = () => {
  const studios = [
    {
      name: "MOOV Dance Studio",
      address: "San Borja 1503, Vértiz Narvarte, Benito Juárez, CDMX",
      maps: "https://maps.app.goo.gl/xCJt6YwRMFK1pfBY6", // Link de Google Maps
      whatsapp: "5529009002",
      logo: moovLogo,
      classes: [
        {
          title: "Tango Argentino",
          level: "Principiantes",
          description:
            'El tango argentino es considerado el rey de los bailes de pareja. "El baile de un corazón y cuatro piernas", "El lenguaje del silencio". Una danza elegante, sobria, refinada que al bailarse en abrazo cerrado, conecta a la gente en un nivel profundo e intenso, mejora la comunicación, el autoestima, reduce el estrés y ansiedad, mejora la conciencia corporal y el equilibrio.',
          schedule: "Martes y Jueves 20-21 hrs\nSábados 10-12 hrs",
          image: tangoImage,
          gradient: "from-[#BC5E6F] to-[#D67084]",
          color: "[#BC5E6F]",
          bgColor: "bg-gradient-to-br from-[#BC5E6F]/20 to-[#D67084]/30",
          borderColor: "border-[#BC5E6F]/30",
        },
        {
          title: "Bailes Latinos y de Salón",
          level: "Principiantes",
          description:
            "El baile social de pareja, es una de las actividades que aporta más felicidad a la gente, ya que a través del contacto físico entre personas y el movimiento con la música, se mejora la salud física, emocional y cognitiva. En esta clase se aprenderán varios ritmos que podrán aplicarse a las fiestas (Merengue, salsa, cumbia, danzón, rock, swing). Una clase ágil y divertida para romper con la rutina de la semana y conocer gente.",
          schedule: "Viernes 7-9 pm",
          image: musicalImage,
          gradient: "from-[#B1A61A] to-[#CEC235]",
          color: "[#B1A61A]",
          bgColor: "bg-gradient-to-br from-[#B1A61A]/20 to-[#CEC235]/30",
          borderColor: "border-[#B1A61A]/30",
        },
      ],
    },
    {
      name: "Cuerpos Bilingües",
      whatsapp: "5529009002",
      logo: null,
      link: "https://cuddly-structure-473471.framer.app/", // Link externo actualizado
      classes: [
        {
          title: "Cuerpos Bilingües",
          level: "Todos los niveles",
          description:
            "Una iniciativa pedagógica intercultural de aprendizaje de idiomas a través del movimiento del Tango. El cuerpo, la danza, más allá de las palabras. Dos personas que no se conocen, que no hablan el mismo idioma, y que tampoco saben bailar. Pero en algún momento, en medio del silencio, algo en su cuerpo empieza a entender.",
          schedule: null,
          image: cuerposPoster,
          gradient: "from-[#B1A61A] to-[#CEC235]",
          color: "[#B1A61A]",
          bgColor: "bg-gradient-to-br from-[#B1A61A]/25 to-[#CEC235]/35",
          borderColor: "border-[#B1A61A]/40",
        },
      ],
    },
    {
      name: "Grupo coreográfico de Tango Escénico",
      address: "Gobernador Melchor Musquiz 38, San Miguel Chapultepec, CDMX",
      maps: "https://maps.app.goo.gl/D79x8yFaELiTH61J9", // Link de Google Maps actualizado
      whatsapp: "5529009002",
      logo: null,
      classes: [
        {
          title: "Grupo coreográfico de Tango Escénico",
          level: "Todos los niveles",
          description:
            "Grupo coreográfico para aprender y montar piezas de tango escénico. Ideal para quienes buscan presentarse en escenarios y festivales. \n\nLugar: Famma\nDirección: Gobernador Melchor Musquiz 38, San Miguel Chapultepec.",
          schedule: "Sábados 16-18 hrs",
          image: parejasColoresImage,
          gradient: "from-[#6EA995] to-[#7BB5A2]",
          color: "[#6EA995]",
          bgColor: "bg-gradient-to-br from-[#6EA995]/20 to-[#7BB5A2]/30",
          borderColor: "border-[#6EA995]/30",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-yellow-100 relative pt-20">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-16 z-10">
        {/* Header */}
        <div className="text-right mb-16 animate-slide-up">
          <h1 className="font-serif tracking-tight text-5xl md:text-7xl font-light text-gray-800 mb-6">
            Clases
          </h1>
          <div className="w-24 h-px bg-cultural ml-auto mr-0 opacity-60 mb-6"></div>
        </div>

        {/* Studios and Classes */}
        <div className="space-y-16">
          {studios.map((studio, studioIndex) => (
            <div key={studio.name} className="space-y-8">
              {/* Studio Header */}
              <div
                className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 animate-fade-in shadow-lg"
                style={{ animationDelay: `${studioIndex * 0.3}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  {studio.logo ? (
                    <div className="flex flex-col items-center w-full">
                      <img
                        src={studio.logo}
                        alt={studio.name}
                        className="h-14 md:h-16 lg:h-20 w-auto mb-2 object-contain"
                      />
                      <div className="w-24 h-1 bg-gradient-to-r from-[#BC5E6F] to-[#6EA995] mb-6"></div>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col items-center">
                      <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 mb-2">
                        {studio.name}
                      </h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-[#BC5E6F] to-[#6EA995] mb-6"></div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studio.address && (
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-[#6EA995]" />
                      <a
                        href={studio.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-light underline hover:text-[#6EA995]"
                      >
                        {studio.address}
                      </a>
                    </div>
                  )}
                  {studio.whatsapp && (
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5 text-[#B1A61A]" />
                      <a
                        href={`https://wa.me/${studio.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-light underline hover:text-[#B1A61A]"
                      >
                        Reserva al: {studio.whatsapp}
                      </a>
                    </div>
                  )}
                  {studio.link && (
                    <div className="flex items-center gap-3 text-gray-600 md:col-span-2 lg:col-span-1">
                      <ExternalLink className="w-5 h-5 text-[#3E977D]" />
                      <a
                        href={studio.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-light hover:text-[#3E977D] transition-colors"
                      >
                        Ir al curso
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Classes for this studio */}
              <div className="space-y-8">
                {studio.classes.map((classItem, classIndex) => (
                  <div
                    key={`${studio.name}-${classItem.title}`}
                    className={`group relative overflow-hidden ${classItem.bgColor} backdrop-blur-md border ${classItem.borderColor} rounded-2xl hover:shadow-2xl transition-all duration-500 animate-fade-in hover:scale-[1.005]`}
                    style={{
                      animationDelay: `${(studioIndex * studio.classes.length + classIndex) * 0.2}s`,
                    }}
                  >
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${classItem.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>

                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${classItem.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    <div className="relative">
                      <div className="md:flex">
                        {/* Image section */}
                        <div className="md:w-2/5 flex items-center justify-center overflow-hidden rounded-2xl">
                          {" "}
                          <div className="w-full h-[32rem] md:h-[38rem] flex items-center justify-center">
                            <img
                              src={classItem.image}
                              alt={classItem.title}
                              className="w-full h-full object-contain rounded-2xl border-4 border-transparent transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${classItem.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                          ></div>
                        </div>

                        {/* Content section */}
                        <div className="md:w-3/5 p-8 md:p-12 space-y-8">
                          <div className="space-y-4">
                            <h3
                              className={`text-4xl md:text-5xl font-serif font-light text-gray-800 group-hover:text-${classItem.color} transition-colors duration-300`}
                            >
                              {classItem.title}
                            </h3>

                            {/* Decorative line */}
                            <div
                              className={`w-20 h-1 bg-gradient-to-r ${classItem.gradient} group-hover:w-32 transition-all duration-500 rounded-full`}
                            ></div>
                          </div>

                          <p className="text-gray-700 font-light leading-relaxed text-lg whitespace-pre-line">
                            {classItem.description}
                          </p>

                          {/* Schedule card */}
                          {classItem.schedule && (
                            <div className="bg-white/60 border border-gray-300/30 rounded-xl p-6 backdrop-blur-sm flex flex-col items-start">
                              <div className="text-gray-500 font-light text-sm mb-2">
                                Horario
                              </div>
                              <div className="text-gray-800 font-light text-lg whitespace-pre-line mb-4">
                                {classItem.schedule}
                              </div>
                              {/* Info de contacto y links alineados en vertical, pegados a la izquierda y con logo MOOV */}
                              <div className="flex flex-col items-start gap-3 mt-2 w-full">
                                {studio.logo && (
                                  <img
                                    src={studio.logo}
                                    alt="MOOV Logo"
                                    className="h-16 w-auto drop-shado p-1 mb-2"
                                  />
                                )}
                                {studio.address && (
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="w-5 h-5 text-[#6EA995]" />
                                    <a
                                      href={studio.maps}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-light underline hover:text-[#6EA995]"
                                    >
                                      {studio.address}
                                    </a>
                                  </div>
                                )}
                                {studio.whatsapp && (
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <Phone className="w-5 h-5 text-[#B1A61A]" />
                                    <a
                                      href={`https://wa.me/${studio.whatsapp}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-light underline hover:text-[#B1A61A]"
                                    >
                                      Reserva al: {studio.whatsapp}
                                    </a>
                                  </div>
                                )}
                                {studio.link && (
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <ExternalLink className="w-5 h-5 text-[#3E977D]" />
                                    <a
                                      href={studio.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-light hover:text-[#3E977D] transition-colors"
                                    >
                                      Ir al curso
                                    </a>
                                  </div>
                                )}
                                {(classItem.title ===
                                  "Bailes Latinos y de Salón" ||
                                  classItem.title === "Tango Argentino") && (
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <ExternalLink className="w-5 h-5 text-[#3E977D]" />
                                    <a
                                      href="https://share.google/zqZaM5oDlKSmQCyNl"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-light underline hover:text-[#3E977D] transition-colors"
                                    >
                                      Info y ubicación
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          {classItem.title === "Cuerpos Bilingües" && (
                            <div className="flex items-center gap-2 text-gray-600 mt-2">
                              <ExternalLink className="w-5 h-5 text-[#3E977D]" />
                              <a
                                href="https://cuddly-structure-473471.framer.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-light underline hover:text-[#3E977D] transition-colors"
                              >
                                Ir al curso
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
