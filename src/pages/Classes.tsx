// Import dance class images
import tangoImage from "../assets/tango-class.jpg";
import musicalImage from "../assets/musical-theater-class.jpg";
import contemporaryImage from "../assets/contemporary-class.jpg";
import balletImage from "../assets/ballet-class.jpg";
import adultsImage from "../assets/adultos-class.jpg";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const Classes = () => {
  const studios = [
    {
      name: "MOOV Dance Studio",
      address: "San Borja 1503, Vértiz Narvarte, Benito Juárez, CDMX",
      whatsapp: "5529009002",
      instagram: "@moovdancestudio",
      website: null,
      classes: [
        {
          title: "Tango Argentino",
          level: "Principiantes",
          description:
            'El tango argentino es considerado el rey de los bailes de pareja. "El baile de un corazón y cuatro piernas", "El lenguaje del silencio". Una danza elegante, sobria, refinada que al bailarse en abrazo cerrado, conecta a la gente en un nivel profundo e intenso, mejora la comunicación, el autoestima, reduce el estrés y ansiedad, mejora la conciencia corporal y el equilibrio.',
          schedule: "Martes y Jueves 20-21 hrs",
          image: tangoImage,
          gradient: "from-[#BC5E6F] to-[#D67084]",
          color: "[#BC5E6F]",
          bgColor: "bg-gradient-to-br from-[#BC5E6F]/20 to-[#D67084]/30",
          borderColor: "border-[#BC5E6F]/30",
        },
        {
          title: "Bailes Latinos",
          level: "Principiantes",
          description:
            "El baile social de pareja, es una de las actividades que aporta más felicidad a la gente, ya que a través del contacto físico entre personas y el movimiento con la música, se mejora la salud física, emocional y cognitiva. En esta clase se aprenderán varios ritmos que podrán aplicarse a las fiestas (Merengue, salsa, cumbia, danzón, rock, swing). Una clase ágil y divertida para romper con la rutina de la semana y conocer gente.",
          schedule: "Viernes 19-21 horas",
          image: musicalImage,
          gradient: "from-[#B1A61A] to-[#CEC235]",
          color: "[#B1A61A]",
          bgColor: "bg-gradient-to-br from-[#B1A61A]/20 to-[#CEC235]/30",
          borderColor: "border-[#B1A61A]/30",
        },
        {
          title: "Ballet Adultos",
          level: "Principiantes",
          description:
            "El ballet clásico ha dejado de ser una disciplina exclusiva de jóvenes e infantes para ser una forma de arte terapéutica y con múltiples beneficios físicos, mentales y emocionales entre adultos. El ballet nos permite desconectar de las tensiones diarias a través de la conexión entre música y movimiento, trabaja todos los grupos musculares, la flexibilidad, la postura y la fuerza.",
          schedule: "Lunes y miércoles 9-10:30 am",
          image: balletImage,
          gradient: "from-[#6EA995] to-[#7BB5A2]",
          color: "[#6EA995]",
          bgColor: "bg-gradient-to-br from-[#6EA995]/20 to-[#7BB5A2]/30",
          borderColor: "border-[#6EA995]/30",
        },
        {
          title: "Baile para Adultos Mayores",
          level: "Principiantes",
          description:
            "El baile es una actividad que puede ser practicada a cualquier edad, brinda felicidad y añade calidad de vida física, mental, emocional y social. Mantiene las articulaciones sanas, fomenta la escucha, la coordinación y memoria. En esta clase los abuelitos podrán sentirse bienvenidos y ser parte de una comunidad donde no hay discriminación alguna por edad o condición física.",
          schedule: "Lunes y miércoles 11-12",
          image: adultsImage,
          gradient: "from-[#3E977D] to-[#4AA68B]",
          color: "[#3E977D]",
          bgColor: "bg-gradient-to-br from-[#3E977D]/20 to-[#4AA68B]/30",
          borderColor: "border-[#3E977D]/30",
        },
      ],
    },
    {
      name: "Dancing Queer",
      address:
        "Monterrey 241-3er. piso, Roma Sur, Cuauhtémoc, Ciudad de México, CDMX",
      whatsapp: "55 4885 1059",
      instagram: "@dancingqueermx",
      website: "www.dancingqueer.mx",
      classes: [
        {
          title: "Tango Queer",
          level: "Principiantes",
          description:
            "El tango Queer es una corriente de la danza tango donde los roles de género y mando líder-seguidor son flexibles y fuera de estereotipos, lo que brinda libertad y seguridad a la gente que gusta bailar con gente del mismo sexo o que decide asumir un rol distinto en la danza. Esta clase es también muy formativa para personas que tienen la inquietud de la docencia.",
          schedule: "Sábados 12-2 pm",
          image: tangoImage,
          gradient: "from-[#BC5E6F] to-[#D67084]",
          color: "[#BC5E6F]",
          bgColor: "bg-gradient-to-br from-[#BC5E6F]/25 to-[#D67084]/35",
          borderColor: "border-[#BC5E6F]/40",
        },
      ],
    },
    {
      name: "El abrazo de México",
      address: "Rio Tiber 91, 2o piso, Cuauhtémoc, CDMX",
      whatsapp: null,
      instagram: null,
      website: "https://cuddly-structure-473471.framer.app/",
      classes: [
        {
          title: "Cuerpos Bilingües",
          level: "Todos los niveles",
          description:
            "Una iniciativa pedagógica intercultural de aprendizaje de idiomas a través del movimiento del Tango. El cuerpo, la danza, más allá de las palabras. Dos personas que no se conocen, que no hablan el mismo idioma, y que tampoco saben bailar. Pero en algún momento, en medio del silencio, algo en su cuerpo empieza a entender.",
          schedule: "Domingos 10, 17, 23 y 31 de Agosto 2025 - 1:30-4 pm",
          image: tangoImage,
          gradient: "from-[#B1A61A] to-[#CEC235]",
          color: "[#B1A61A]",
          bgColor: "bg-gradient-to-br from-[#B1A61A]/25 to-[#CEC235]/35",
          borderColor: "border-[#B1A61A]/40",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-yellow-100 relative pt-20">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-16 z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-gray-800 mb-8">
            Clases
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-[#BC5E6F] via-[#6EA995] to-[#B1A61A] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Descubre tu potencial artístico a través de nuestras clases
            especializadas en danza y artes escénicas
          </p>
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
                  {studioIndex === 0 ? (
                    <div className="flex flex-col items-center w-full">
                      <img
                        src={"/src/assets/moov-studio.png"}
                        alt="MOOV Dance Studio"
                        className="h-12 w-auto mb-2"
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
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#6EA995]" />
                    <span className="font-light">{studio.address}</span>
                  </div>

                  {studio.whatsapp && (
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5 text-[#B1A61A]" />
                      <span className="font-light">
                        WhatsApp: {studio.whatsapp}
                      </span>
                    </div>
                  )}

                  {studio.instagram && (
                    <div className="flex items-center gap-3 text-gray-600">
                      <ExternalLink className="w-5 h-5 text-[#BC5E6F]" />
                      <span className="font-light">{studio.instagram}</span>
                    </div>
                  )}

                  {studio.website && (
                    <div className="flex items-center gap-3 text-gray-600 md:col-span-2 lg:col-span-1">
                      <ExternalLink className="w-5 h-5 text-[#3E977D]" />
                      <a
                        href={studio.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-light hover:text-[#3E977D] transition-colors"
                      >
                        {studio.website}
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
                    className={`group relative overflow-hidden ${classItem.bgColor} backdrop-blur-md border ${classItem.borderColor} rounded-2xl hover:shadow-2xl transition-all duration-500 animate-fade-in hover:scale-[1.02]`}
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
                        <div className="md:w-2/5 relative overflow-hidden">
                          <img
                            src={classItem.image}
                            alt={classItem.title}
                            className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${classItem.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                          ></div>

                          {/* Level badge on image */}
                          <div className="absolute top-6 left-6">
                            <span
                              className={`px-4 py-2 bg-black/70 text-${classItem.color} text-sm font-light rounded-full border border-${classItem.color}/50 backdrop-blur-sm`}
                            >
                              {classItem.level}
                            </span>
                          </div>
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

                          <p className="text-gray-700 font-light leading-relaxed text-lg">
                            {classItem.description}
                          </p>

                          {/* Schedule card */}
                          <div className="bg-white/60 border border-gray-300/30 rounded-xl p-6 backdrop-blur-sm">
                            <div className="text-gray-500 font-light text-sm mb-2">
                              Horario
                            </div>
                            <div className="text-gray-800 font-light text-lg">
                              {classItem.schedule}
                            </div>
                          </div>
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
