export interface JudgeRecord {
  i_id: number;
  u_id: number;
  firstDuration: string;
  secondDuration: string;
  firstJudge: string;
  secondJudge: string;
}

export interface JudgementArray extends Array<JudgeRecord> { }
