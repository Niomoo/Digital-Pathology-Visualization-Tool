export interface Project {
  title: string;
  type: string;
  path: string;
}

export interface ProjectArray extends Array<Project> { }
