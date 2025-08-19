import { Link } from "react-router-dom";
import valeriaDancer from "@/assets/valeria-dancer.jpg";
import logo from "@/assets/logo.svg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={valeriaDancer}
          alt=""
          className="w-full h-full object-cover animate-glow"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-left px-6 lg:px-8 xl:px-48 flex flex-col items-center lg:items-start lg:ml-0 lg:mr-auto w-full">
        <div className="animate-slide-up flex flex-col items-center w-full lg:items-start">
          <img
            src={logo}
            alt="Logo Valeria Vega"
            className="mb-12 w-48 sm:w-64 md:w-[80%] lg:w-[32rem] animate-breathe"
            style={{ maxWidth: "32rem" }}
          />
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center lg:justify-start lg:pl-16 items-center">
            <Link
              to="/about"
              className="group relative overflow-hidden px-6 lg:px-8 py-3 bg-primary/10 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-minimal rounded-sm w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Conocer mi historia</span>
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-minimal origin-left"></div>
            </Link>

            <Link
              to="/shows"
              className="text-accent hover:text-cultural transition-minimal font-light relative group w-full sm:w-auto px-6 lg:px-8 text-center"
            >
              Ver espectáculos
              <div className="absolute bottom-0 left-0 w-0 h-px bg-cultural group-hover:w-full transition-minimal"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
