export type Person = {
  firstName: string;
  lastName: string;
  positions?: Array<Position>;
  image?: string;
};

type Position = {
  title: PositionTitle;
  startYear: number;
  endYear: number;
};

type PositionTitle = keyof typeof postitionTitles;

export function getPositionTitle(title: PositionTitle) {
  return postitionTitles[title];
}

const postitionTitles = {
  FUHRER: "Fuhrer",
  ORDFÖRANDE: "Ordförande",
  VICE_ORDFÖRANDE: "Vice ordförande",
  SEKRETERARE: "Sekreterare",
  KAMRER: "Kamrer",
  INFORMATIONSUTSKOTTETS_ORDFÖRANDE: "Informationsutskottets ordförande",
  SOCIALA_UTSKOTTETS_ORDFÖRANDE: "Sociala utskottets ordförande",
  UTBILDNINGSUTSKOTTETS_ORDFÖRANDE: "Utbildningsutskotetts ordförande",
  INTERNA_UTSKOTTETS_ORDFÖRANDE: "Interna utskottets ordförande",
  CLUBHÖFVDING: "Clubhöfvding",
} as const;
