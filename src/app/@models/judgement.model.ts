export interface JudgeRecord {
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

export interface JudgementArray extends Array<JudgeRecord> { }
