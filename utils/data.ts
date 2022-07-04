import { Dictionary } from "models/models.gen";
import { ImageDTO } from "models/models.image";
import { Contact, Day } from "./types";
import poster1 from "public/pastEditions/1.jpg";
import poster2 from "public/pastEditions/2.jpg";
import poster3 from "public/pastEditions/3.jpg";
import poster4 from "public/pastEditions/4.jpg";
import poster5 from "public/pastEditions/5.jpg";
import program2 from "public/pastEditions/2_programme.jpg";
import program3 from "public/pastEditions/3_programme.jpg";
import program4 from "public/pastEditions/4_programme.jpg";
import program5 from "public/pastEditions/5_programme.jpg";

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
        notes: "Présentation des réalisateurs.",
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
        time: "22h",
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
        notes: "Présentation de la réalisatrice.",
      },
      {
        time: "19h15",
        title: "SHIGERU BAN, ARCHITECTE DE L'URGENCE",
        metadata: "de Michel Quinejure, 2000, 52 min.",
      },
      {
        time: "20h30",
        title: "Dîner",
      },
      {
        time: "22h",
        title: "NO LAND'S SONG",
        metadata: "de Ayat Najafi, 2014, 91 min.",
      },
    ],
  },
];

enum ContactSections {
  Outrevert = "Outrevert",
  Fada = "Fada",
}
export const contactInfo: Dictionary<ContactSections, Contact[]> = {
  [ContactSections.Outrevert]: [
    {
      name: "Outrevert, les amis du Centre d'Art de Châteauvert",
      address: "Chemin du Petit Saint Estève 83670 Châteauvert",
      email: ["contactacac@gmail.com", "festivalfada@gmail.com"],
    },
    {
      name: "Li Ragu / Présidente",
    },
    { name: "Micheline Simon / Secrétaire" },
    { name: "Claude Rauber / Trésorier" },
  ],
  [ContactSections.Fada]: [
    {
      name: "Anita Mizrahi / Contact presse",
      email: "a.studio@online.nl",
    },
    {
      name: "Béatrice Pellegrino / Graphisme",
      email: "bea-titude@orange.fr",
    },
    { name: "Charlotte Dugauquier", email: "charlottedugauquier@yahoo.fr" },
    { name: "Michel Loye", email: "loye.michel@free.fr" },
  ],
};

export const pastEditions: {
  poster: ImageDTO;
  programme?: ImageDTO;
}[] = [
  {
    poster: {
      src: poster1,
      alt: "Affiche de l'édition 1 - 2015",
    },
  },
  {
    poster: {
      src: poster2,
      alt: "Affiche de l'édition 2 - 2016",
    },
    programme: {
      src: program2,
      alt: "Programme de l'édition 2 - 2016",
    },
  },
  {
    poster: {
      src: poster3,
      alt: "Affiche de l'édition 3 - 2017",
    },
    programme: {
      src: program3,
      alt: "Programme de l'édition 3 - 2017",
    },
  },
  {
    poster: {
      src: poster4,
      alt: "Affiche de l'édition 4 - 2018",
    },
    programme: {
      src: program4,
      alt: "Programme de l'édition 4 - 2018",
    },
  },
  {
    poster: {
      src: poster5,
      alt: "Affiche de l'édition 5 - 2021",
    },
    programme: {
      src: program5,
      alt: "Programme de l'édition 5 - 2021",
    },
  },
];
