const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Acerca de
          </h2>
          <div className="w-24 h-1 bg-cultural mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground font-sans leading-relaxed mb-6">
                Valeria Vega Solórzano es una destacada figura en el ámbito del tango y las artes escénicas en México. Con una Maestría en Teatro y Artes Escénicas por UNIR y una Licenciatura en Danza por la UDG, su formación incluye estudios en ballet clásico en el Centro Pro Ballet de Michoacán, ISTD y la Escuela Nacional de Danza Clásica del INBA, Actuación, Canto y Dramaturgia.
              </p>
              
              <p className="text-lg text-foreground font-sans leading-relaxed mb-6">
                Desde 2006, dirige su sello iO Artes Escénicas, con el que ha producido 14 espectáculos. Con una carrera en teatro Musical (Fantasma de la Opera, José el soñador, Bésame mucho, Victor Victoria), ópera, opereta y zarzuela, ha sido reconocida como una de las mejores bailarinas de tango en México, carrera que comenzó en 1999.
              </p>
              
              <p className="text-lg text-foreground font-sans leading-relaxed mb-6">
                Ha colaborado con compañías como "Latin Tango", "Íntimo Tango", "Malka", "Emo Tango" y "Tango y Más", realizando giras por México, Estados Unidos, Buenos Aires y China. Su trabajo se caracteriza por integrar lenguaje teatral y dancístico, creando narrativas cautivadoras.
              </p>
              
              <p className="text-lg text-foreground font-sans leading-relaxed">
                Entre sus obras destacan "Malena Baila el Tango", "iO Tango", "Detrás de mí", "Mordisquito", "La Dama del Puerto" y "Rebozo". Fue becaria del Jeune Ballet du Quebec, Creadores Escénicos FONCA 2012 y PECDA Michoacán 2023, y ha sido jurado del Sistema Nacional de Creadores de Arte 2019, CIAAD- UNESCO, PECDA Chihuahua, CONADE y Concurso Nacional de Tango, entre otros.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">iO Artes Escénicas</h3>
              <p className="text-muted-foreground font-sans mb-4">Desde 2006</p>
              <p className="text-foreground font-sans leading-relaxed">
                Sello fundado por Valeria que utiliza el lenguaje teatral y dancístico para crear espectáculos únicos.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-primary">Reconocimientos</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cultural rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-sans text-sm">Becaria Jeune Ballet du Quebec</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cultural rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-sans text-sm">Creadores Escénicos FONCA 2012</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cultural rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-sans text-sm">PECDA Michoacán 2023</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cultural rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-sans text-sm">Jurado Sistema Nacional de Creadores de Arte 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;