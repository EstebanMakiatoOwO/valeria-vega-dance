import { MapPin, Phone, ExternalLink } from 'lucide-react';

const ClassesSection = () => {
  const studios = [
    {
      name: "MOOV Dance Studio",
      address: "San Borja 1503, Vértiz Narvarte, Benito Juárez, CDMX",
      phone: "5529009002",
      instagram: "@moovdancestudio",
      classes: [
        {
          title: "TANGO ARGENTINO",
          schedule: "Martes y Jueves 20-21 hrs",
          level: "Todos los nivel",
          description: "El tango argentino es considerado el rey de los bailes de pareja. 'El baile de un corazón y cuatro piernas', 'El lenguaje del silencio'. Una danza elegante, sobria, refinada que al bailarse en abrazo cerrado, conecta a la gente en un nivel profundo e intenso, mejora la comunicación, el autoestima, reduce el estrés y ansiedad, mejora la conciencia corporal y el equilibrio."
        },
        {
          title: "BAILES DE SALÓN",
          schedule: "Viernes 19-21 horas",
          level: "Todos los nivel",
          description: "El baile social de pareja, es una de las actividades que aporta más felicidad a la gente, ya que a través del contacto físico entre personas y el movimiento con la música, se mejora la salud física, emocional y cognitiva. En esta clase se aprenderán varios ritmos que podrán aplicarse a las fiestas (Merengue, salsa, cumbia, danzón, rock, swing)."
        },
        {
          title: "BALLET ADULTOS",
          schedule: "Lunes y miércoles 9-10:30 am",
          level: "Todos los niveles",
          description: "El ballet clásico ha dejado de ser una disciplina exclusiva de jóvenes e infantes para ser una forma de arte terapéutica y con múltiples beneficios físicos, mentales y emocionales entre adultos. El ballet nos permite desconectar de las tensiones diarias a través de la conexión entre música y movimiento."
        },
        {
          title: "BAILE PARA ADULTOS MAYORES",
          schedule: "Lunes y miércoles 11-12",
          level: "Todos los niveles",
          description: "El baile es una actividad que puede ser practicada a cualquier edad, brinda felicidad y añade calidad de vida física, mental, emocional y social. En esta clase los abuelitos podrán sentirse bienvenidos y ser parte de una comunidad donde no hay discriminación alguna por edad o condición física."
        }
      ]
    },
    {
      name: "DANCING QUEER",
      address: "Monterrey 241-3er. piso, Roma Sur, Cuauhtémoc, Ciudad de México, CDMX",
      phone: "55 4885 1059",
      website: "www.dancingqueer.mx",
      instagram: "@dancingqueermx",
      classes: [
        {
          title: "TANGO QUEER",
          schedule: "Sábados 12-2 pm",
          level: "Todos los niveles",
          description: "El tango Queer es una corriente de la danza tango donde los roles de género y mando líder-seguidor son flexibles y fuera de estereotipos, lo que brinda libertad y seguridad a la gente que gusta bailar con gente del mismo sexo o que decide asumir un rol distinto en la danza. Esta clase es también muy formativa para personas que tienen la inquietud de la docencia."
        }
      ]
    },
    {
      name: "El abrazo de México",
      address: "Rio Tiber 91, 2o piso, Cuauhtémoc, CDMX",
      website: "https://cuddly-structure-473471.framer.app/",
      classes: [
        {
          title: "CUERPOS BILINGÜES",
          schedule: "Domingos 10, 17, 23 y 31 de Agosto 2025 - 1:30-4 pm",
          level: "Todos los niveles",
          description: "Una iniciativa pedagógica intercultural de aprendizaje de idiomas a través del movimiento del Tango. El cuerpo, la danza, más allá de las palabras. Dos personas que no se conocen, que no hablan el mismo idioma, y que tampoco saben bailar. Pero en algún momento, en medio del silencio, algo en su cuerpo empieza a entender."
        }
      ]
    }
  ];

  return (
    <section id="classes" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Clases
          </h2>
          <div className="w-24 h-1 bg-cultural mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {studios.map((studio, studioIndex) => (
            <div key={studioIndex} className="bg-card rounded-3xl p-8 lg:p-12 shadow-elegant">
              <div className="mb-8">
                <h3 className="text-3xl font-serif font-bold text-primary mb-4">{studio.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-accent" />
                    <span className="text-sm font-sans">{studio.address}</span>
                  </div>
                  
                  {studio.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-accent" />
                      <span className="text-sm font-sans">{studio.phone}</span>
                    </div>
                  )}
                  
                  {studio.instagram && (
                    <div className="flex items-center space-x-2">
                      <ExternalLink size={16} className="text-accent" />
                      <span className="text-sm font-sans">{studio.instagram}</span>
                    </div>
                  )}
                  
                  {studio.website && (
                    <div className="flex items-center space-x-2 md:col-span-2 lg:col-span-1">
                      <ExternalLink size={16} className="text-accent" />
                      <a href={studio.website} className="text-sm font-sans hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                        {studio.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {studio.classes.map((classItem, classIndex) => (
                  <div key={classIndex} className="group hover:bg-secondary/20 p-6 rounded-2xl transition-all duration-300">
                    <div className="mb-4">
                      <h4 className="text-xl font-serif font-semibold text-tango mb-2">{classItem.title}</h4>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <span className="text-sm font-sans text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {classItem.schedule}
                        </span>
                        <span className="text-sm font-sans text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {classItem.level}
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground font-sans leading-relaxed text-sm">
                      {classItem.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;