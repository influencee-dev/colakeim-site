# Guida alla Pubblicazione - Colakeim Website

Questo progetto è configurato come una moderna Single Page Application (SPA) con React, TypeScript e Tailwind CSS, ottimizzata per Vercel.

## 🚀 Come Pubblicare su Vercel (Metodo Diretto)

Hai due modi per portare questo sito online. Il **Metodo 1** è quello consigliato perché ti permette di gestire gli aggiornamenti futuri facilmente.

### Metodo 1: Via GitHub (Consigliato)

1.  **Crea un Repository GitHub**
    *   Vai su [github.com/new](https://github.com/new).
    *   Dai un nome al repo (es. `colakeim-website`).
    *   Clicca "Create repository".

2.  **Carica il Codice**
    *   Apri il terminale nella cartella di questo progetto.
    *   Esegui questi comandi in ordine:
        ```bash
        git init
        git add .
        git commit -m "Primo deploy sito Colakeim"
        git branch -M main
        git remote add origin https://github.com/TUO_USERNAME/colakeim-website.git
        git push -u origin main
        ```
        *(Sostituisci `TUO_USERNAME` con il tuo vero utente GitHub)*.

3.  **Collega Vercel**
    *   Vai su [vercel.com](https://vercel.com) e accedi.
    *   Clicca **"Add New..."** > **"Project"**.
    *   Nella lista "Import Git Repository", vedrai `colakeim-website`. Clicca **Import**.
    *   Nella schermata successiva ("Configure Project"), lascia tutto com'è. Vercel riconoscerà automaticamente "Vite".
    *   Clicca **Deploy**.

Attendere circa 1 minuto. Il sito sarà online!

---

### Metodo 2: Vercel CLI (Senza GitHub)

Se vuoi solo vedere il sito online subito senza creare un repository:

1.  Assicurati di avere Node.js installato.
2.  Apri il terminale nella cartella del progetto.
3.  Esegui:
    ```bash
    npx vercel
    ```
4.  Segui le istruzioni a schermo (Rispondi `Y` a "Set up and deploy?", premi invio per confermare le impostazioni di default).

---

## 🌐 Collegare il Dominio (es. www.colakeim.com)

Una volta che il sito è su Vercel:

1.  Vai nella Dashboard del progetto su Vercel.
2.  Clicca su **Settings** (in alto) > **Domains** (a sinistra).
3.  Scrivi il dominio del cliente (es. `www.colakeim.com`) e clicca **Add**.
4.  Vercel ti mostrerà dei valori DNS (solitamente un Record A e un CNAME).
5.  Accedi al pannello di controllo dove hai acquistato il dominio (Aruba, GoDaddy, Register, ecc.).
6.  Vai nella "Gestione DNS".
7.  Copia i valori forniti da Vercel nei record DNS del dominio.

*Nota: La propagazione può richiedere da 1 a 24 ore, ma solitamente avviene in pochi minuti.*

## 🛠 Comandi Sviluppo Locale

Se vuoi modificare il sito sul tuo computer:

*   Installare dipendenze: `npm install`
*   Avviare server locale: `npm run dev`
*   Costruire per produzione: `npm run build`
