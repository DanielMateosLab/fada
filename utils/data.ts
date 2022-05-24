import { Contact, Day } from "./types";

export const programData: Day[] = [
  {
    date: "Vendredi 22 Juillet",
    events: [
      {
        time: "14h30",
        title: "C'EST ASSEZ BIEN D'ÊTRE FOU",
        metadata: "de Antoine Page sur Bilal Berreni, 2013, 60 min.",
        notes: "Projection jeune public - version courte.",
      },
      {
        time: "17h",
        title: "ESCHER, L'EXPLORATEUR DE L'INFINI",
        metadata: "de Robin Lutz, 2018, 52 min.",
      },
      {
        time: "18h15",
        title: "MONA HATOUM AU CENTRE POMPIDOU",
        metadata: "de Alyssa Verbizh, 2015, 20 min.",
      },
      {
        time: "18h45",
        title: "A CORRIGER",
        metadata:
          "de Raphaël Wirth et Pierre Alexandre Cavé, sur Omar Ba, 2021, 52 min.",
      },
      {
        time: "20h",
        title: "GABRIELLE MÜNTER",
        metadata: "de Florence Mauro, 2021, 54 min.",
      },
      {
        time: "21h",
        title: "Dîner",
      },
      {
        time: "21h",
        title: "ANNA HALPRIN, LE SOUFFLE DE LA DANSE",
        metadata: "de Ruedi Gerber, 2009, 80 min.",
      },
    ],
  },
  {
    date: "Samedi 23 Juillet",
    events: [
      {
        time: "17h",
        title: "SIGNÉ DALI",
        metadata: "de Philippe Elusse, 52 min.",
      },
      {
        time: "18h15",
        title: "REBECCA HORN",
        metadata: "de Heinz-Peter Schwerfel, 1993, 44 min.",
      },
      {
        time: "19h15",
        title: "TERRES BARCELO",
        metadata: "de Christian Tran, 2018, 75 min.",
      },
      {
        time: "20h30",
        title: "LES PLANTES QUI DANSENT",
        metadata: "de Anita Mizrahi, 4min.",
      },
      {
        title: "MAIS AILLEURS C'EST TOUJOURS MIEUX",
        metadata: "de Vivian Ostrovsky, 2016, 4min.",
      },
      {
        title: "SON CHANT",
        metadata: "de Vivian Ostrovsky, 2020, 12min.",
      },
      {
        time: "21h",
        title: "Dîner",
      },
      {
        time: "22h",
        title: "C'EST ASSEZ BIEN D'ÊTRE FOU",
        metadata: "de Antoine Page sur Bilal Berreni, 2013, 105 min.",
      },
    ],
  },
  {
    date: "Dimanche 24 Juillet",
    events: [
      {
        time: "16h30",
        title: "SABRINA",
        metadata: "de Léna Durr, 2022, 20 min.",
      },
      {
        time: "17h",
        title: "QUE VIVA TINA",
        metadata: "de Silvano Castano, 1997, 52 min.",
      },
      {
        time: "18h10",
        title: "BIENVENUE HARKIS D'AUJOURD'HUI",
        metadata: "de et présenté par Anita Mizrahi, 2022, 52 min.",
        notes: "Rencontre avec la réalisatrice.",
      },
      {
        time: "19h15",
        title: "SHIGERU BAN, ARCHITECTE DE L'URGENCE",
        metadata: "de Michel Quinejure, 2020, 52 min.",
      },
      {
        time: "20h30",
        title: "Dîner",
      },
      {
        time: "22h30",
        title: "NO LAND'S SONG",
        metadata: "de Ayat Najafi, 2014, 91 min.",
      },
    ],
  },
];

export const contactInfo: Contact[] = [
  {
    name: "Outrevert, les amis du Centre d'Art de Châteauvert",
    address: "Chemin du Petit Saint Estève 83670 Châteauvert",
    email: "contactacac@gmail.com",
  },
  {
    name: "Li Ragu / Présidente",
    phone: "06 10 78 93 17",
    email: "liragu.liragu@gmail.com",
  },
  {
    name: "Micheline Simon / Secrétaire",
    phone: "06 32 08 77 40",
    email: "michelinesimon3@gmail.com",
  },
  {
    name: "Claude Rauber / Trésorier",
    phone: "06 07 64 23 11",
    email: "claude.rauber@free.fr",
  },
];
