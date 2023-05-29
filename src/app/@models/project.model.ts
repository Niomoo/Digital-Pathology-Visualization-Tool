export interface Judgement {
  u_id: number;
  i_id: number | null;
  title: string;
  name: string;
  path: string;
  firstDuration: string;
  secondDuration: string;
  firstJudge: string;
  secondJudge: string;
}

export interface JudgementArray extends Array<Judgement> { }

export interface Image {
  name: string;
  path: string;
}

export interface ImageArray extends Array<Image> {}

export interface Project {
  p_id: number;
  title: string;
}

export interface ProjectArray extends Array<Project> { }
