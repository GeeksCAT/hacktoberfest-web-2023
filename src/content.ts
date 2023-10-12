import { ILogo, IEvent, ISpeaker } from './types'

export const weWillHave = ['Marató de PRs', 'Xerrades i tallers', 'Lightning talks']
export const eventBriteURL =
  'https://www.eventbrite.es/e/entradas-festa-opensource-girona-2023-geekscat-gdg-718595698077'
export const startTime = '9:30h'
export const dueTime = '19h'
export const eventDate = 'dissabte 21/10/2023'

export const organizers: ILogo[] = [
  {
    logo: 'logo-geekscat.png',
    name: 'Geeks.Cat',
    web: 'https://geekscat.org/'
  },
  {
    logo: 'gdg_girona.png',
    name: 'Google Dev Group Girona',
    web: 'https://gdg.community.dev/gdg-girona'
  }
]

export const supporters: ILogo[] = [
  {
    logo: 'ajuntament.png',
    name: 'Ajuntament de Girona',
    web: 'https://web.girona.cat/',
    title: 'finançament'
  },
  {
    logo: 'assoc-catosfera-logo-2019.png',
    name: 'Catosfera',
    web: 'https://catosfera.cat/',
    title: 'espais i logística'
  }
]

export const sponsors: ILogo[] = [
  {
    logo: 'apsl.png',
    name: 'APSL',
    web: 'https://apsl.tech/es/'
  },
  {
    logo: 'gisce.png',
    name: 'GISCE',
    web: 'https://gisce.net/es/'
  },
  {
    logo: 'fundcraft.png',
    name: 'FundCraft',
    web: 'https://www.fundcraft.lu/'
  },
  {
    logo: 'photopills.png',
    name: 'PhotoPills',
    web: 'https://www.photopills.com/es'
  },
  {
    logo: 'kave_home.png',
    name: 'Kave Home',
    web: 'https://kavehome.com/es/ca/'
  },
  {
    logo: 'clouding.png',
    name: 'Clouding',
    web: 'https://clouding.io/'
  },
  {
    logo: 'dobleseo.png',
    name: 'Dobleseo',
    web: 'https://dobleseo.pro'
  }
]

export const diary: IEvent[] = [
  {
    hour: '9:30',
    rooms: [
      {
        name: 'Pati',
        event: 'Obertura de portes',
        link: null
      }
    ]
  },
  {
    hour: '11:00',
    rooms: [
      {
        name: 'Pati',
        event: 'Home Assistant',
        link: null
      },
      {
        name: 'Claustre',
        event: 'Marató PR',
        link: null
      }
    ]
  }
]

export const speakers: ISpeaker[] = [
  {
    name: 'Laura Mora i Aubert',
    twitter: 'blackhold_',
    talk: 'Connectat la teva aplicació amb la IA',
    summary: [
      "Dingo és una aplicació desenvolupada amb Django que es connecta a varis chatbots entrenats amb procediments d'actuació i diferents prompts per el tipus d'interlocutor que interactua amb el programa. Si l'interlocutor està autenticat al sistema podrà fer la seva consulta per veu o per text, el chatbot respon i aleshores aquesta resposta serà possible traduir-la i reproduir-la a més d'una trentena d'idiomes."
    ],
    bio: []
  },
  {
    name: 'Cristian Bezerdic Stoica',
    twitter: 'CristiBezerdic',
    talk: 'El món dels controladors leverless de hardware obert',
    summary: [
      'Dins de la informàtica el concepte de Software Open-Source és conegut per tots, però aquest estiu em vaig trobar amb un problema on gràcies al concepte de hardware obert (Dissenys i circuits compartits per a tothom) vaig aconseguir el que volia a la meitat de preu! A més em vaig emportar experiències amb el món dels PCB, soldadures i botons juntament amb comunitats d\'entusiastes que constantment estant "tunejant" i compartint les seves invencions'
    ],
    bio: ['']
  },
  {
    name: 'Marc Bosch',
    twitter: 'akakush0',
    talk: "Per què és important l'Open Source quan gestionem Bitcoin?",
    summary: [
      "Ens centrarem en la seguretat que aporta l'OS de cara a l'usuari, i els perills que tenen les altres apps, les quals realment tenen el control sobre els teus diners, i no tu mateix, tal i com hauria de ser gràcies a l'aplicació de la criptografia de clau pública i privada que se'ns presenta en el naixement de Bitcoin."
    ],
    bio: ['']
  },

  {
    name: 'Óscar Tienda Beteta',
    twitter: '',
    talk: 'Me suenas: cómo nos conocimos antes de conocernos',
    summary: [
      'En la charla "Me suenas: cómo nos conocimos antes de conocernos", se presenta un proyecto personal en el que se utilizan datos geográficos de Google para descubrir cuándo me crucé con mi pareja antes de conocernos formalmente. El proyecto, desarrollado en Python con herramientas open source de análisis de datos, se ofrece como un caso práctico para entender el alcance y limitaciones de este tipo de datos geográficos.'
    ],
    bio: []
  },

  {
    name: 'Andreu Ibañez',
    twitter: 'andreuibanez',
    talk: 'Presentació programa Beques Google Summer of Code',
    summary: ['Explicarem què és el programa i exemples de projectes i estudiants.'],
    bio: [
      'Mentor del programa de beques d’estiu Google Summer of Code des de fa 11 anys, ha obtingut 63 beques per un import de mig milió de dòlars'
    ]
  },

  {
    name: 'Joan Leon',
    twitter: 'nucliweb',
    talk: 'Detectant problemes de web performance amb DevTools',
    summary: [''],
    bio: ['Google Developer Experts / GDG Girona']
  },
  {
    name: 'Jordi Planes',
    talk: 'Models de llenguatge amb IA generativa: visió i experiència',
    summary: [
      "Una exploració dels models de llenguatge en IA generativa, combinant una visió general de l'estat actual de la tecnologia amb reflexions personals i experiències pràctiques"
    ],
    bio: ["De les molècules de la biotecnologia a la bioinformàtica i ara navegant per les aigües profundes de l'IA generativa al món empresarial: simplement un geek de la ciència que no pot deixar de codificar la vida en algorismes 🧬💻🚀"]
  },
  {
    name: 'Dani Herrera',
    talk: "dotnet Blazor Poet's Arena",
    summary: [
      "A la primera part de la xerrada mostraré com fer una aplicació web amb dotnet Blazor Server. A la segona part de la xerrada, tot aquell que vulgui, des del seu mòbil, tauleta o portàtil, farà d'usuari de l'aplicació. Blazor és una tecnologia de codi lliure de Microsoft per desenvolupar aplicacions web. Una integració de l'app amb OpenAI farà de jurat i determinarà els guanyadors. T'atreviràs a competir al Blazor Poet's Arena?"
    ],
    bio: ['dotnet full stack developer a la UdG']
  },
  {
    name: 'Victor Carreras',
    twitter: 'vcarreras9',
    talk: 'Taller: Flutter, la nueva era de aplicaciones móviles',
    summary: [
      '¿Has oído hablar de Flutter? Aprende a hacer tu primera aplicación en Flutter y veremos todo lo que hay bajo el capó de esta maravillosa tecnología de Google.'
    ],
    bio: ['GDG Burgos']
  },
  {
    name: 'Carlos Afonso',
    twitter: '',
    talk: 'Taller: Introducció a Kubernetes',
    summary: [
      'En aquest workshop farem una introducció a què es Kubernetes, quins problemas ens ajuda a solucionar, i com pots usar-ho per construir les teves aplicacions. A més, podràs posar en pràctica els coneixements amb uns laboratoris pràctics de Google Kubernetes Engine (GKE), el servei de Kubernetes gestionat de Google Cloud.'
    ],
    bio: ['Google Developer Experts / Google Cloud']
  },
  {
    name: 'Ruben Guerrero',
    twitter: 'rubenguerrero',
    talk: 'Taller: Domòtica amb Homeassistant',
    summary: [
      'Homeassistant és un software OpenSource que s’està convertint en el estàndar de les cases domòtiques DIY. Hi ha una comunitat molt important darrere seu, cosa que permet integrar una gran varietat de dispositius diferents. Explicarem una mica el funcionament general del software i farem una demo amb diferents dispositius per tal de veure-ho en funcionament real.'
    ],
    bio: ['']
  },
  {
    name: 'Llorenç Pujol Ferriol',
    twitter: 'llorenspujol',
    talk: 'Taller: Com extreure ofertes de feina a LinkedIn utilitzant Puppeteer i RxJS',
    summary: [
      'Aprendrem com extreure ofertes de feina de LinkedIn utilitzant Puppeteer i RxJS. Aprendrem a fer-ho de forma declarativa, modular i escalable utilitzant RxJS en comptes de Promises. Durant la xerrada, també veurem quins són els "common pitfalls" quan fem "web scraping" i com evitar-los'
    ],
    bio: ['']
  }
]
