export interface Image {
  p_id: number;
  path: string;
  name: string;
}

export interface ImageArray extends Array<Image> {}
