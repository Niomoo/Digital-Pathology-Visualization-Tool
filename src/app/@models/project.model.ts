export interface Project {
  p_id: number;
  title: string;
  type: string;
}

export interface ProjectArray extends Array<Project> { }
