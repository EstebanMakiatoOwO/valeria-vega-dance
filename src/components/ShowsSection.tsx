const ShowsSection = () => {
  const shows = [
    { year: "2006", title: "LAS ORQUESTAS" },
    { year: "2005", title: "DETRÁS DE MI- DE MUJERES Y TANGOS" },
    { year: "2004", title: "REBOZO" },
    { year: "2018-2025", title: "LA DAMA DEL PUERTO" },
    { year: "2027", title: "MORDISQUITO" },
    { year: "2016", title: "SUEÑO DE UNA NOCHE DE VERANO" },
    { year: "2015", title: "LAS NOTAS DEL TANGO" },
    { year: "2015", title: "MANON, UN ÚLTIMO TANGO" },
    { year: "2014", title: "LOS COLORES DEL TANGO" },
    { year: "2013", title: "MI TANGO" },
    { year: "2010", title: "QUÉ QUILOMBO, TANGO, TEATRO Y CABARET" },
    { year: "2009", title: "TANGO, ÓLEO SOBRE TELA" },
    { year: "2008", title: "iO TANGO" },
    { year: "2007", title: "JUERGA POR TANGOS" },
    { year: "2006", title: "MALENA BAILA EL TANGO" }
  ];

  return (
    <section id="shows" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Espectáculos
          </h2>
          <div className="w-24 h-1 bg-cultural mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-accent/5 to-tango/5 p-8 lg:p-12 rounded-3xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-accent font-serif font-bold text-lg">iO</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary">iO Artes Escénicas</h3>
            </div>
            
            <p className="text-lg text-foreground font-sans leading-relaxed mb-8">
              Sello fundado en 2006 por Valeria Vega Solórzano que utiliza el lenguaje teatral y dancístico para crear espectáculos que cuentan historias y transportan al espectador al encuentro con sus pasiones desde una concepción e interpretación propias.
            </p>
            
            <p className="text-foreground font-sans leading-relaxed mb-8">
              Reúne de manera independiente y por proyecto a distintos creadores: bailarines, músicos, iluminadores, escenógrafos, compositores, directores, dramaturgos, coreógrafos y diseñadores de vestuario como: Martha Benitez +, Libertad Mardel, Jésica Elizondo, Tenzing Ortega + Erika Suárez, Hasam Díaz Fierro, Erika Méndez, Cesar "Chacho" Guerra, Francisco de León, Eduardo Ruiz Saviñon, Luis Escárcega, Elisa Rodríguez, Horacio Rosso, Jacob Morales, entre muchos otros artistas y diseñadores.
            </p>
            
            <p className="text-foreground font-sans leading-relaxed">
              A la fecha ha realizado 14 puestas en escena destacando "Malena baila el tango" (Foro de las Artes, CENART), iO Tango (Festival internacional de música de Morelia) "Detrás de mí, de mujeres y tangos" (Foro de las Artes, CENART y Teatro de la Danza, INBA, C.C. Helénico) "Mi tango", "Manon, un último tango", "Los colores del tango"( Los Talleres de Coyoacán), "La dama del puerto" (Circuito Nacional de Artes Escénicas en espacios independientes), "Las notas del tango" (Un Teatro), "Mordisquito" (Casa del Lago UNAM), "Rebozo" (PECDA 2024).
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-semibold text-primary mb-8 text-center">Cronología de Espectáculos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shows.map((show, index) => (
              <div key={index} className="group hover:bg-accent/5 p-6 rounded-2xl transition-all duration-300 border border-border/50 hover:border-accent/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-16 text-center text-sm font-sans font-semibold text-accent bg-accent/10 px-2 py-1 rounded-lg">
                      {show.year}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-serif font-medium text-primary group-hover:text-tango transition-colors duration-300">
                      {show.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;