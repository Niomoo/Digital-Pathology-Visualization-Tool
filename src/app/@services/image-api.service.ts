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

  getHeatMapPath(image: Image): string {
    let heatmap = image.path.replace('.svs.dzi', '_HeatMap.png');
    return this.url + 'heatmap/' + heatmap;
  }

}
