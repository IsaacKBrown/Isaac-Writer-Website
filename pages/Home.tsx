
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative flex-grow flex items-center overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background Image: Noir San Francisco */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        {/* Dark overlay for that noir feel, slightly heavier for contrast */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter leading-tight text-white drop-shadow-2xl">
              ISAAC K.<br />BROWN
            </h1>
            <p className="text-xl md:text-2xl font-light text-slate-300 italic tracking-wide max-w-md">
              Former emu owner, Benny enthusiast, liver of dreams
            </p>
            <div className="pt-8">
              <Link
                to="/about"
                className="inline-block px-10 py-4 bg-white text-black font-bold tracking-[0.2em] rounded-sm hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-2xl uppercase text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Portrait Image (provided by user) */}
          <div className="w-full md:w-1/2 flex justify-end">
            <div className="relative w-full max-w-md">
              {/* Artistic frame offset */}
              <div className="absolute -inset-4 border border-white/10 -z-10 translate-x-4 translate-y-4"></div>
              <div className="overflow-hidden shadow-2xl ring-1 ring-white/20">
                <img 
                  src="./isaac.jpg" 
                  alt="Isaac K. Brown" 
                  className="w-full h-auto object-cover grayscale brightness-90 contrast-110 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
