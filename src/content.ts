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
    name: 'Óscar Tienda Beteta',
    twitter: '',
    talk: 'Me suenas: cómo nos conocimos antes de conocernos',
    summary: [
      'En la charla "Me suenas: cómo nos conocimos antes de conocernos", se presenta un proyecto personal en el que se utilizan datos geográficos de Google para descubrir cuándo me crucé con mi pareja antes de conocernos formalmente. El proyecto, desarrollado en Python con herramientas open source de análisis de datos, se ofrece como un caso práctico para entender el alcance y limitaciones de este tipo de datos geográficos.'
    ],
    bio: []
  },
  {
    name: 'Victor Carreras',
    twitter: 'vcarreras9',
    talk: 'Flutter, la nueva era de aplicaciones móviles',
    summary: [
      '¿Has oído hablar de Flutter? Aprende a hacer tu primera aplicación en Flutter y veremos todo lo que hay bajo el capó de esta maravillosa tecnología de Google.'
    ],
    bio: []
  },
  {
    name: 'Carlos Afonso',
    twitter: '',
    talk: 'Introducción a Kubernetes.',
    summary: [''],
    bio: []
  },
  {
    name: 'Joan Leon',
    twitter: 'nucliweb',
    talk: 'Detectant problemes de web performance amb DevTools.',
    summary: [''],
    bio: []
  }
]
