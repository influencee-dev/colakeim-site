import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';
import { SEOContent } from './pages/SEOContent';
import { ProjectsPage } from './pages/Projects';
import { BlogPage } from './pages/Blog';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-900 min-h-screen text-slate-800 font-sans flex flex-col">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* 1. Core Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/servizi" element={<ServicesPage />} />
            <Route path="/contatti" element={<ContactPage />} />

            {/* 2. Specific Service Pages (Pillar Sub-pages) */}
            <Route path="/servizi/ristrutturazione-interni-lago-di-como" element={<SEOContent 
              title="Ristrutturazione Interni Lago di Como"
              subtitle="Il tuo partner di fiducia per rinnovare casa sul Lario"
              description="Siamo specializzati nella ristrutturazione di interni, appartamenti e case complete. Dallo studio degli spazi alla consegna chiavi in mano, garantiamo un servizio eccellente che unisce design moderno e rispetto per l'architettura locale."
              image="https://picsum.photos/id/201/1920/1080"
              location="Lago di Como"
              keywords={['ristrutturazione interni', 'ristrutturazione appartamenti', 'ristrutturazione casa', 'ristrutturazione interni Lago di Como']}
            />} />
            
            <Route path="/servizi/ristrutturazione-strutture-ricettive-lago-di-como" element={<SEOContent 
              title="Ristrutturazione Strutture Ricettive"
              subtitle="Rinnova il tuo Hotel o B&B per stupire i tuoi ospiti"
              description="Interventi mirati per ristrutturazioni di hotel e strutture ricettive. Ottimizziamo tempi e costi per garantire il minimo fermo attività, con un occhio di riguardo al comfort e all'estetica che i turisti del Lago di Como si aspettano."
              image="https://picsum.photos/id/1059/1920/1080"
              location="Lago di Como"
              keywords={['ristrutturazioni hotel', 'struttura ricettiva', 'ristrutturazioni hotel Lago di Como', 'hospitality design']}
            />} />

            <Route path="/servizi/imbiancature-finiture-pareti-como" element={<SEOContent 
              title="Imbiancature e Finiture Pareti"
              subtitle="L'arte del colore e della materia"
              description="Eseguiamo imbiancature professionali e finiture decorative di alto profilo. Dalle pareti lisce e minimaliste alle texture materiche più complesse, utilizziamo solo materiali di prima scelta per ambienti salubri ed eleganti."
              image="https://picsum.photos/id/60/1920/1080"
              location="Como"
              keywords={['imbiancatura professionale', 'finiture decorative', 'imbiancatura pareti lisce', 'imbiancatura pareti materiche']}
            />} />

            <Route path="/servizi/cartongesso-controsoffitti-como" element={<SEOContent 
              title="Cartongesso e Controsoffitti"
              subtitle="Soluzioni architettoniche a secco su misura"
              description="Realizziamo lavori in cartongesso su misura: controsoffitti scenografici con illuminazione integrata, velette, librerie e pareti divisorie. Modella i tuoi spazi con flessibilità e precisione millimetrica."
              image="https://picsum.photos/id/314/1920/1080"
              location="Como"
              keywords={['lavori cartongesso', 'controsoffitti e velette in cartongesso', 'pareti divisorie cartongesso', 'lavori cartongesso su misura']}
            />} />

            <Route path="/servizi/pavimenti-interni-como" element={<SEOContent 
              title="Posa Pavimenti Interni"
              subtitle="Superfici che arredano: Gres, Parquet e Design"
              description="Guidiamo il cliente nella scelta dei migliori pavimenti interni moderni. Esperti nella posa di pavimenti in gres, parquet pregiati e soluzioni tecniche. La base perfetta per ogni progetto d'arredo."
              image="https://picsum.photos/id/442/1920/1080"
              location="Como"
              keywords={['pavimenti interni', 'posa pavimenti gres', 'posa parquet', 'pavimenti moderni interni', 'come scegliere pavimenti interni']}
            />} />

            <Route path="/servizi/rivestimenti-superfici-resina-como" element={<SEOContent 
              title="Rivestimenti e Superfici in Resina"
              subtitle="Continuità ed eleganza contemporanea"
              description="Specialisti in pavimenti e rivestimenti in resina a Como. Creiamo superfici continue, impermeabili e igieniche, ideali per bagni moderni e cucine di design. Un look sofisticato senza fughe."
              image="https://picsum.photos/id/195/1920/1080"
              location="Como"
              keywords={['rivestimenti in resina', 'pavimenti resina', 'superfici resina cucina', 'rivestimenti bagno in resina']}
            />} />

            <Route path="/servizi/effetti-decorativi-pareti-como" element={<SEOContent 
              title="Effetti Decorativi Materici"
              subtitle="Pareti che diventano opere d'arte"
              description="Trasformiamo le pareti con finiture effetto pietra, effetto cemento e decorazioni materiche. Tecniche artigianali avanzate per dare carattere e profondità agli ambienti più esclusivi."
              image="https://picsum.photos/id/835/1920/1080"
              location="Como"
              keywords={['finiture pareti materiche', 'effetto cemento pareti', 'decorazioni pareti effetto cemento', 'finiture effetto pietra']}
            />} />

            <Route path="/servizi/restyling-mobili-resina-como" element={<SEOContent 
              title="Restyling Mobili in Resina"
              subtitle="Nuova vita al tuo arredo esistente"
              description="Il nostro servizio di restyling mobili permette di recuperare cucine e armadiature datate applicando finiture in resina resistenti e moderne. Una scelta ecologica e di stile per rinnovare senza sostituire."
              image="https://picsum.photos/id/534/1920/1080"
              location="Como"
              keywords={['restyling mobili', 'restyling mobili resina', 'rinnovo cucina senza sostituire']}
            />} />


            {/* 3. Targets / Sectors */}
            <Route path="/destinazioni-target" element={<SEOContent 
              title="I Nostri Settori di Intervento"
              subtitle="Soluzioni dedicate per ogni esigenza immobiliare"
              description="Analizziamo le necessità specifiche di ogni tipologia di cliente. Che tu sia un privato che sogna la casa perfetta o un imprenditore che vuole valorizzare il proprio business, abbiamo la soluzione giusta."
              image="https://picsum.photos/id/249/1920/1080"
              keywords={['settori intervento', 'clienti target', 'tipologie immobili']}
            />} />

            <Route path="/ristrutturazioni-privati-case-appartamenti-ville-lago-di-como" element={<SEOContent 
              title="Ristrutturazioni per Privati e Ville"
              subtitle="Dal monolocale alla villa storica"
              description="Gestiamo ristrutturazioni di appartamenti e ville sul Lago di Como con la massima discrezione e cura. Ristrutturazione chiavi in mano per chi cerca qualità senza compromessi nella propria abitazione."
              image="https://picsum.photos/id/1011/1920/1080"
              location="Lago di Como"
              keywords={['ristrutturazione appartamenti', 'ristrutturazione casa', 'ristrutturazione villa', 'ristrutturazione case Como e provincia']}
            />} />

            <Route path="/ristrutturazioni-hotel-resort-lago-di-como" element={<SEOContent 
              title="Contract Hotel & Resort"
              subtitle="Ristrutturazioni di lusso per l'Hotellerie"
              description="Siamo il partner ideale per le ristrutturazioni di Hotel e Resort sul Lario. Interventi pianificati per rispettare le stagionalità e massimizzare l'appeal della struttura verso una clientela internazionale."
              image="https://picsum.photos/id/164/1920/1080"
              location="Lago di Como"
              keywords={['ristrutturazioni hotel', 'ristrutturazione struttura ricettiva', 'contract hotel', 'ristrutturazioni hotel Lago di Como']}
            />} />

            <Route path="/ristrutturazioni-beb-case-vacanza-lago-di-como" element={<SEOContent 
              title="Ristrutturazione B&B e Case Vacanza"
              subtitle="Valorizza il tuo immobile a reddito"
              description="Il mercato degli affitti brevi richiede standard elevati. Proponiamo ristrutturazioni per B&B e case vacanza che uniscono durabilità, facilità di manutenzione ed effetto wow per le foto online."
              image="https://picsum.photos/id/250/1920/1080"
              location="Lago di Como"
              keywords={['ristrutturazione B&B Lago di Como', 'ristrutturare casa vacanza Lago di Como', 'investimento immobiliare']}
            />} />

            <Route path="/ristrutturazioni-locali-commerciali-uffici-como" element={<SEOContent 
              title="Locali Commerciali e Uffici"
              subtitle="Spazi funzionali per il tuo business"
              description="Progettazione e ristrutturazione di uffici e spazi commerciali a Como. Ambienti di lavoro ergonomici e negozi che comunicano il valore del tuo brand attraverso l'architettura."
              image="https://picsum.photos/id/180/1920/1080"
              location="Como"
              keywords={['ristrutturazione interni commerciali', 'servizi ristrutturazione Como', 'uffici design', 'showroom']}
            />} />

            <Route path="/progetti-chiavi-in-mano-lago-di-como" element={<SEOContent 
              title="Progetti Chiavi in Mano"
              subtitle="Un unico referente, zero stress"
              description="Il nostro servizio di punta: la ristrutturazione chiavi in mano. Ci occupiamo di tutto, dalla progettazione agli impianti, fino alle pulizie finali. Tu devi solo entrare in casa."
              image="https://picsum.photos/id/366/1920/1080"
              location="Lago di Como"
              keywords={['ristrutturazione chiavi in mano', 'impresa ristrutturazioni', 'general contractor']}
            />} />


            {/* 4. Projects & Portfolio */}
            <Route path="/progetti-realizzati" element={<ProjectsPage />} />


            {/* 5. Blog & Content Marketing Pages */}
            <Route path="/blog" element={<BlogPage />} />

            <Route path="/blog/guida-ristrutturazioni" element={<SEOContent 
              title="Guida Completa alle Ristrutturazioni"
              subtitle="Tutto quello che devi sapere prima di iniziare"
              description="Quanto costa ristrutturare un appartamento a Como? Quali permessi servono? In questa guida affrontiamo i temi caldi per aiutarti a pianificare il tuo investimento senza errori."
              image="https://picsum.photos/id/433/1920/1080"
              isArticle={true}
              keywords={['guida ristrutturazione casa Lago di Como', 'quanto costa ristrutturare un appartamento a Como', 'permessi ristrutturazione']}
            />} />

            <Route path="/blog/idee-arredo-interni" element={<SEOContent 
              title="Idee Arredo e Design d'Interni"
              subtitle="Ispirazioni per la tua casa moderna"
              description="Esplora le ultime tendenze in fatto di arredo interni. Idee per finiture pareti moderne, abbinamenti cromatici e soluzioni salvaspazio per appartamenti contemporanei."
              image="https://picsum.photos/id/366/1920/1080"
              isArticle={true}
              keywords={['idee arredo interni', 'idee finiture pareti moderne', 'tendenze design 2025']}
            />} />

            <Route path="/blog/materiali-finiture" element={<SEOContent 
              title="Focus Materiali e Finiture"
              subtitle="Scegliere il meglio per la tua casa"
              description="Resina vs gres: pavimenti a confronto. Vantaggi del cartongesso per le ristrutturazioni interne. Approfondimenti tecnici per scegliere i materiali giusti consapevolmente."
              image="https://picsum.photos/id/1070/1920/1080"
              isArticle={true}
              keywords={['resina vs gres', 'pavimenti a confronto', 'vantaggi del cartongesso per ristrutturazioni interne', 'materiali edili']}
            />} />

            <Route path="/blog/ristrutturazioni-lago-di-como" element={<SEOContent 
              title="Ristrutturare sul Lago di Como"
              subtitle="Specificità del territorio e normative"
              description="Perché scegliere un'impresa di ristrutturazioni locale? Conoscere il territorio, i vincoli paesaggistici e la logistica del Lago di Como è fondamentale per la riuscita del cantiere."
              image="https://picsum.photos/id/1011/1920/1080"
              isArticle={true}
              location="Lago di Como"
              keywords={['ristrutturazioni edili', 'impresa ristrutturazioni Lago di Como', 'vincoli paesaggistici']}
            />} />


            {/* 6. Geo-Local Landing Pages (SEO Landing Pages) */}
            <Route path="/ristrutturazioni-interni-como" element={<SEOContent 
              title="Ristrutturazioni Interni Como Centro"
              subtitle="Interventi di pregio nel cuore della città"
              description="La nostra impresa di ristrutturazioni a Como è leader nel recupero di appartamenti in centro storico. Gestiamo permessi ZTL e logistica complessa per offrirti un servizio impeccabile."
              image="https://picsum.photos/id/400/1920/1080"
              location="Como"
              keywords={['ristrutturazione interni Lago di Como', 'ristrutturazione appartamenti Como', 'impresa ristrutturazione Como']}
            />} />

            <Route path="/ristrutturazioni-interni-bellagio" element={<SEOContent 
              title="Ristrutturazioni Edili a Bellagio"
              subtitle="Lusso e tradizione nella perla del Lario"
              description="Eseguiamo lavori di ristrutturazione a Bellagio e nel triangolo lariano. Specializzati in ville d'epoca e seconde case, garantiamo finiture che rispettano il prestigio della location."
              image="https://picsum.photos/id/10/1920/1080"
              location="Bellagio"
              keywords={['lavori ristrutturazione Bellagio', 'ristrutturazione ville', 'impresa edile Bellagio']}
            />} />

            <Route path="/ristrutturazioni-interni-menaggio" element={<SEOContent 
              title="Ristrutturazioni a Menaggio"
              subtitle="Servizi edili sulla sponda occidentale"
              description="Stai cercando un'impresa per la ristrutturazione della tua villa a Menaggio? Colakeim offre consulenza tecnica e operativa in tutta la zona, garantendo standard qualitativi elevati."
              image="https://picsum.photos/id/11/1920/1080"
              location="Menaggio"
              keywords={['ristrutturazioni villa Menaggio', 'lavori edili Menaggio', 'rifacimento interni']}
            />} />

            <Route path="/ristrutturazioni-interni-lecco" element={<SEOContent 
              title="Ristrutturazioni Interni Lecco"
              subtitle="Qualità Colakeim anche nel lecchese"
              description="Estendiamo i nostri servizi di ristrutturazione appartamenti a Lecco e provincia. Portiamo la nostra esperienza nel design e nella gestione cantiere anche nel ramo orientale del lago."
              image="https://picsum.photos/id/12/1920/1080"
              location="Lecco"
              keywords={['ristrutturazioni appartamenti Lecco', 'impresa ristrutturazioni Lecco', 'rifacimento bagno Lecco']}
            />} />

            <Route path="/ristrutturazioni-hotel-lago-di-como" element={<SEOContent 
              title="Ristrutturazioni Hotel Lago di Como"
              subtitle="Specialisti nell'Hospitality di lusso"
              description="Una pagina dedicata specificamente alle esigenze degli albergatori. Ristrutturazioni hotel Lago di Como con focus su design, acustica e comfort per garantire recensioni a 5 stelle."
              image="https://picsum.photos/id/1059/1920/1080"
              location="Lago di Como"
              keywords={['ristrutturazioni hotel Lago di Como', 'rinnovo camere albergo', 'design hotel']}
            />} />

            <Route path="/ristrutturazioni-case-vacanza-lago-di-como" element={<SEOContent 
              title="Ristrutturazione Case Vacanza"
              subtitle="Prepara il tuo immobile per gli affitti brevi"
              description="Massimizza la rendita del tuo immobile con una ristrutturazione intelligente. Creiamo ambienti fotogenici, resistenti e accoglienti, perfetti per il mercato degli affitti turistici sul Lago di Como."
              image="https://picsum.photos/id/1040/1920/1080"
              location="Lago di Como"
              keywords={['ristrutturare casa vacanza Lago di Como', 'ristrutturazione B&B Lago di Como', 'arredo casa vacanza']}
            />} />
            
            {/* Catch-all 404 */}
            <Route path="*" element={<SEOContent 
               title="Pagina non trovata"
               subtitle="Errore 404"
               description="La pagina che stavi cercando potrebbe essere stata rimossa o il link potrebbe essere errato. Torna alla Home per continuare la navigazione."
               image="https://picsum.photos/id/1000/1920/1080"
               keywords={[]}
            />} />
            
          </Routes>
        </main>

        <Footer />
        <StickyBottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;