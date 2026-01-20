
import React, { useState } from 'react';

interface ContactFormProps {
  inline?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ inline = false }) => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // For static hosting, we use a mailto link simulation or just show a message.
    // In a real production scenario, you'd use Formspree or a similar API.
    const mailtoUrl = `mailto:isaac.k.brown@gmail.com?subject=Website Contact from ${name}&body=${message} (From: ${email})`;
    window.location.href = mailtoUrl;

    setStatus('Success! Opening your email client...');
    setTimeout(() => setStatus(null), 5000);
  };

  const inputClasses = `w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400 transition-colors text-white ${
    !inline ? 'bg-slate-50 border-slate-300 text-slate-900' : ''
  }`;

  const labelClasses = `block text-xs uppercase tracking-widest mb-2 ${
    !inline ? 'text-slate-600' : 'text-slate-400'
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label className={labelClasses}>Message</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell me about your project or say hello..."
          className={inputClasses}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-md tracking-widest font-bold transition-all transform hover:scale-[1.01] active:scale-[0.99]"
      >
        SEND MESSAGE
      </button>
      {status && (
        <p className="text-center text-sm text-green-400 mt-2 font-medium">{status}</p>
      )}
    </form>
  );
};

export default ContactForm;
