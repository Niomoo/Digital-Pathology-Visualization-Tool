import { Injectable } from '@angular/core';

import { Image } from '../@models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ImageAPIService {
  // private url = 'http://localhost:8000/';
  private url = 'http://140.116.247.180:8081/';
  constructor() { }

  getImagePath(image: Image): string {
    return this.url + 'dzi/' + image.path;
  }
}
