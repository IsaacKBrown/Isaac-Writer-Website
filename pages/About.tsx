
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex-grow bg-[#020617] py-16 px-4 md:px-0 flex items-center">
      <div className="container mx-auto max-w-6xl bg-white text-slate-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden rounded-sm">
        <div className="flex flex-col md:flex-row">
          {/* Content Left */}
          <div className="w-full md:w-3/5 p-8 md:p-20 flex flex-col justify-center">
            <h2 className="text-sm tracking-[0.3em] font-bold text-blue-600 mb-4 uppercase">
              The Author
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-900">
              About Isaac
            </h3>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed font-light text-slate-700">
              <p>
                Isaac is a writer from Palo Alto, California, currently living in Austin, Texas, with his wife, Victoria, and their senior dog, Benny.
              </p>
              <p>
                He has an MFA in Screenwriting from USC and approaches his fiction with a cinematic sensibility, often exploring themes of isolation, obsession, and the oddity of ordinary life.
              </p>
            </div>
          </div>

          {/* Image Right (provided by user) */}
          <div className="w-full md:w-2/5 bg-slate-100">
            <img 
              src="/isaac.jpg" 
              alt="Isaac K. Brown" 
              className="w-full h-full object-cover min-h-[500px] grayscale contrast-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
