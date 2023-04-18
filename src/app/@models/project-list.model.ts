export interface Project {
  p_id: number;
  title: string;
  type: string;
  path: string;
}

export interface ProjectArray extends Array<Project> { }
