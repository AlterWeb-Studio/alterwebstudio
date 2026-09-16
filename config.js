/* ============================================================
   CONFIG.JS - AlterWeb Studio (pàgina principal)
   ============================================================ */

const CONFIG = {

    // 1. NEGOCI
    COOK:           "cookies_alterweb",
    NOM:            "AlterWeb Studio",
    LOGO:           "logo/logoAWStrans.png",
    LOGO_T:         "logo/logoAWStrans.png",
    SLOGAN:         "",
    TELEFON:        "",            TELEFON_LABEL:   "Telèfon",     TELEFON_ICO: "📞",
    MOBIL:          "711510676",
    WHATSAPP:       "https://wa.me/34711510676",    WHATSAPPLABEL: "💬 Escríu-me per WhatsApp",
    EMAIL:          "info@alterwebstudio.com",   EMAIL_LABEL:     "e-Mail",       EMAIL_ICO: "✉️",
    ADRECA:         "C/Faraday, 145  08224  Terrassa",
       ADRECA_LABEL: "Adreça",
       ADRECA_ICO: "📍",
    INSTAGRAM:      "https://www.instagram.com/alterwebstudio",
    FACEBOOK:       "",
    EMAIL_SUPORT:   "info@alterwebstudio.com",
    //-------------------------------------------------------------------------------------------------------------------------

    // 2. RUTES
    REPO_URL:       "https://alterweb-studio.github.io/alterwebstudio/",
    BASE_URL:       "./",
    BASE_WORKER:    "",
    URL_OFICIAL:    "https://www.alterwebstudio.com",
    ASSETS:         "https://avsets.pages.dev/",
    URL_MAPS:       "",
    URL_RESSENYES:  "https://g.page/r/Cawh-z-rLNAYEBM/review",

    // 3. IMATGES 
    BACKGROUND:      "", // ← canviar en el css .html{}
    BLOC_HERO:       "", 
    QR:              "",
    //-------------------------------------------------------------------------------------------------------------------------

    // 4. TEXTOS---------------------------------------------------------------------------------------------------------------
    NAV_INI:        "Inici",
    NAV_QUE:        "Qui som..",
    NAV_PORT:        "Destacats",
    NAV_CON:        "Contacte",



                     //
   
    HERO_EYEBROW:   "Solucions Digitals Dinàmiques",
    HERO_TITOL:     "El teu negoci,<br>visible i al dia",
    HERO_BOTO:      "Veure projectes",

    // 2.4 MARQUEE
    MARQUEE_ITEMS: ["Disseny web", "Desenvolupament", "Panells d'administració", "SEO", "Manteniment"],
   
   
    // 2.5 SECCIÓ "QUÈ ÉS"
    QUE_TITOL_PRE:    "Què és",
    QUE_TITOL_ACCENT: "AlterWeb Studio",
    QUE_SUBTITOL:     "Creem webs professionals per a petits negocis i autònoms que volen ser presents a internet sense complicacions. Ràpides, clares i gestionables de forma autònoma.",

     QUE_ITEMS: [
        { icona: "🌐", titol: "Presència digital",  desc: "Una web pròpia que et representa a internet, sense dependre només de les xarxes socials." },
        { icona: "📋", titol: "Contingut dinàmic",  desc: "Cartes, catàlegs, serveis o productes. El contingut s'actualitza en temps real, sense coneixements tècnics." },
        { icona: "⚙️", titol: "Gestió autònoma",    desc: "Panell inclòs perquè tu mateix puguis actualitzar els teus productes, preus o serveis quan vulguis." },
        { icona: "📱", titol: "Responsive",         desc: "Pensada per a totes les pantalles, començant pel mòbil. Ràpida de carregar, perquè els teus clients no marxin abans de veure-la." },
    ],

    QUE_ITEMS_EXTRA: [
        { icona: "🔍", titol: "Pensada per a cercadors",       desc: "Estructurada perquè Google i altres cercadors trobin el teu negoci, i present a Google Maps si tens un local físic." },
        { icona: "🔄", titol: "Renovació sense complicacions", desc: "Tens una web antiga o que va lenta? La renovem de cap a peus, mantenint la teva adreça web de sempre perquè els teus clients no notin cap canvi." },
    ],

    // 2.6 SECCIÓ PORTFOLI
    PORTFOLI_TITOL_PRE:    "Projectes",
    PORTFOLI_TITOL_ACCENT: "destacats",
    PORTFOLI_SUBTITOL:     "Alguns dels negocis que ja confien en AlterWeb Studio per a la seva presència digital.",

    PROJECTES: [
        {
            id:          "amrmotorbike",
            titol:       "AMR MotorBike",
            subtitol:    "Mecanic motos",
            desc:        "Web estàtica per especialistes en manteniment, reparació i restauració de motocicletes.",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/logo-nouAMR.png",
            titolClasse: "font-amr",
            //testimoni:   "«...» — Adri i Manel, AMR MotorBike",
            link:        "https://www.amrmotorbike.com/",
        },
        {
            id:          "gruasesmar",
            titol:       "Gruas Esmar",
            subtitol:    "Asistencia en  carretera",
            desc:        "Web estàtica per especialistes en Serveis de assistència en carretera",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioGE.png",
            titolClasse: "",
            testimoni:   "«Gracias por ponerle tantas ganas y profesionalidad a nuestro proyecto. Gracias por hacérnoslo tan fácil!» — Esther, Gruas Esmar",
            link:        "https://www.gruasesmar.com/",
        },
        {
            id:          "agora",
            titol:       "àgora | Restaurant",
            subtitol:    "Restauració",
            desc:        "Carta digital dinàmica amb menús diaris, carta completa, vins i còctels. Panel d'administració inclòs.",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioAG.png",
            titolClasse: "font-agora",
            //testimoni:   "«...» — Toni i César, àgora",
            link:        "https://agora.alterwebstudio.com/",
        },
        {
            id:          "cadialimentacio",
            titol:       "Carles | Cadí Alimentació",
            subtitol:    "Distribució de congelats",
            desc:        "Carta de Presentació | Portfolio | Tarja de Visites digital.",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioCCA.png",
            titolClasse: "font-agora",
            //testimoni:   "«...» — Carles, Cadí Alimentació",
            link:        "https://carlescadi.alterwebstudio.com/",
        },
        {
            id:          "oleyaji",
            titol:       "El teu Nom | Gastronomia",
            subtitol:    "Restauració",
            desc:        "Web de restaurant amb galeria de plats, fotos i descripcions. Gestió de contingut amb imatges.",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioOA.png",
            titolClasse: "",
            link:        "https://recycled.alterwebstudio.com/",
            banner:      "LOW COST",                                          /*xxxxxxxxxxxxxxxx */
            bannerSub:   " Base ja feta - Adopta-la",                                     /*xxxxxxxxxxxxxxxx */
        },
        {
            id:          "canbelles",
            titol:       "Can Bellès | Restaurant",
            subtitol:    "Restauració",
            desc:        "Web de restaurant amb Carta digital dinàmica amb Menús, Carta i Vins. ",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioCB.png",
            titolClasse: "",
            link:        "https://alterweb-studio.github.io/canbelles/",
            banner:      "EN CONSTRUCCIÓ",                                          /*xxxxxxxxxxxxxxxx */
            bannerSub:   "Nou projecte en marxa..",                                     /*xxxxxxxxxxxxxxxx */
        },
                {
            id:          "disponible",
            titol:       "Aquí hi va el teu Negoci",
            subtitol:    "Disponible",
            desc:        "No esperis més. Demana informació.",
            fons:        "#FFFFFF",
            logo:        "https://avsets.pages.dev/logo/PortfolioAWS.png",
            titolClasse: "",
            link:        "https://avsets.pages.dev/logo/PortfolioAWS.png",
            banner:      "DISPONIBLE",                                          /*xxxxxxxxxxxxxxxx */
            bannerSub:   "Serà la teva web..?",                                     /*xxxxxxxxxxxxxxxx */
        },
    ],

    // 2.7 SECCIÓ PLANTILLES
    PLANTILLES_TITOL_PRE:    "Exemples de",
    PLANTILLES_TITOL_ACCENT: "disseny",
    PLANTILLES_SUBTITOL:     "Plantilles pròpies, encara sense client assignat. Una mostra dels estils amb què treballem.",

    PLANTILLES: [
        {
            titol:    "Vértice",
            subtitol: "Minimalista",
            desc:     "Sidebar lateral i grid de punts interactiu que segueix el ratolí.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioVertice.png",
            link:     "plantillas/plantilla-vertice.html",
        },
        {
            titol:    "Atlas",
            subtitol: "Editorial fosc",
            desc:     "Dock de navegació flotant i cursor amb efecte de llum.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioAtlas.png",
            link:     "plantillas/plantilla-atlas.html",
        },
        {
            titol:    "Sol",
            subtitol: "Maximalista",
            desc:     "Blocs de color atrevits i targetes amb efecte spotlight.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioSol.png",
            link:     "plantillas/plantilla-sol.html",
        },
        {
            titol:    "Papel",
            subtitol: "Artesanal",
            desc:     "Calaix de navegació lateral i rastre de tinta darrere el cursor.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioPapel.png",
            link:     "plantillas/plantilla-papel.html",
        },
        {
            titol:    "Terminal",
            subtitol: "Tècnic",
            desc:     "Titular que s'escriu sol i finestra de previsualització arrossegable.",
            fons:     "#FFFFFF",
            logo:     "https://avsets.pages.dev/logo/PortfolioTerminal.png",
            link:     "plantillas/plantilla-terminal.html",
        },
    ],

    // 2.8 SECCIÓ CONTACTE
    CONTACTE_TITOL:    "Parlem-ne",
    CONTACTE_SUBTITOL: "Tens un negoci i vols ser present a internet? Explica'ns el teu projecte i et diem com podem ajudar-te.",
    CONTACTE_BOTO:     "Contactar",

    // 2.9 FOOTER
    FOOTER_TEXT: "AlterWeb Studio · Solucions Digitals Dinàmiques ·",

    // 3. SEGURETAT
    SITIOS_SEGUROS: ["alterwebstudio.com", "pages.dev", "altervector.github.io", "localhost", "127.0.0.1"],
};