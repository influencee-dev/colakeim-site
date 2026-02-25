import React, { useState } from 'react';
import { Button } from '../components/ui/Button';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the data to an API or use a service like Formspree
    // with the email Colakeimsrl@gmail.com
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-20">
       <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             
             {/* Info */}
             <div>
                <span className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Contattaci</span>
                <h1 className="font-serif text-5xl text-gray-900 mb-8">Parla con i nostri esperti</h1>
                <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
                   Siamo a tua disposizione per sopralluoghi gratuiti, consulenze tecniche e preventivi personalizzati. 
                   Compila il modulo o utilizza i contatti diretti.
                </p>
                
                <div className="space-y-8">
                   <div>
                      <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">Sede Legale</h3>
                      <p className="text-gray-600">Como via Manzoni nr 18</p>
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">Email</h3>
                      <p className="text-gray-600 underline">Colakeimsrl@gmail.com</p>
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2">Telefono</h3>
                      <p className="text-gray-600">+39 347 570 4421</p>
                   </div>
                </div>
             </div>

             {/* Form */}
             <div className="bg-gray-50 p-10 rounded-sm shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-serif text-gray-900">Richiesta inviata!</h2>
                    <p className="text-gray-600">Grazie per averci contattato. Sarai ricontattato al più presto dai nostri tecnici.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-brand-red font-bold text-xs uppercase tracking-widest hover:underline pt-4"
                    >
                      Invia un altro messaggio
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                           <label className="text-xs font-bold uppercase text-gray-500">Nome*</label>
                           <input type="text" className="bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-red" required />
                        </div>
                        <div className="flex flex-col gap-2">
                           <label className="text-xs font-bold uppercase text-gray-500">Cognome*</label>
                           <input type="text" className="bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-red" required />
                        </div>
                     </div>
                     
                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Email*</label>
                        <input type="email" className="bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-red" required />
                     </div>

                     <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Messaggio</label>
                        <textarea rows={5} className="bg-white border border-gray-300 p-3 focus:outline-none focus:border-brand-red"></textarea>
                     </div>

                     <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" required />
                        <span className="text-xs text-gray-500">Accetto la Privacy Policy e il trattamento dei dati personali (GDPR EU 2016/679).</span>
                     </div>

                     <Button fullWidth type="submit">INVIA RICHIESTA</Button>
                  </form>
                )}
             </div>

          </div>
       </div>
    </div>
  );
};