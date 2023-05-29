export interface JudgeRecord {
  title: string;
  name: string;
  firstJudge: string,
  secondJudge: string,
  firstDuration: string,
  secondDuration: string,
  created_time: string
}

export interface RecordArray extends Array<JudgeRecord> { }
