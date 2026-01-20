
import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow bg-slate-950 py-12 px-4 md:px-0 flex items-center">
      <div className="container mx-auto max-w-5xl bg-slate-100 text-slate-900 shadow-2xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Form */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <h1 className="text-5xl font-serif font-bold mb-4 tracking-tight">CONTACT</h1>
            <p className="text-slate-600 mb-12 text-lg">
              Need to get in touch? Fill out the form below.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-inner">
              <ContactForm inline={false} />
            </div>
          </div>

          {/* Right Column - Image of Benny (provided by user) */}
          <div className="w-full md:w-1/2 relative min-h-[500px]">
            <img 
              src="./benny.jpg" 
              alt="Benny the dog" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
