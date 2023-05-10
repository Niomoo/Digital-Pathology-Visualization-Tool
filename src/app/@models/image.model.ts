export interface Image {
  i_id: number;
  path: string;
  name: string;
}

export interface ImageArray extends Array<Image> {}
