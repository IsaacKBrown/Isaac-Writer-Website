
import React from 'react';
import ContactForm from './ContactForm';

interface FooterProps {
  showForm: boolean;
}

const Footer: React.FC<FooterProps> = ({ showForm }) => {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {showForm && (
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-serif text-center mb-8">Get In Touch</h2>
            <ContactForm inline={true} />
          </div>
        )}
        <div className="pt-8 border-t border-white/10 text-center text-xs tracking-widest text-slate-400">
          <p>© {new Date().getFullYear()} ISAAC K. BROWN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
