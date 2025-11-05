export interface IMeta {
  title: string;
  text: string;
}

export interface IOverview {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface IProblem {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface ISolution {
  title: string;
  paragraphs: string[];
}

export interface IProject {
  id: number;
  title: string;
  tags: string[];
  image: string;
  link?: string; // optional external link
  meta: IMeta[];
  overview: IOverview;
  problems: IProblem;
  solutions: ISolution;
}
