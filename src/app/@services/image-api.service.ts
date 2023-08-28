import { Injectable } from '@angular/core';

import { Image } from '../@models/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageAPIService {
  constructor() { }

  getImagePath(image: Image): string {
    return `${environment.baseUrl}` + 'dzi/' + image.path;
  }

  getHeatMapPath(image: Image): string {
    let heatmap = image.path.replace('.svs.dzi', '_HeatMap.png');
    return `${environment.baseUrl}` + 'heatmap/' + heatmap;
  }

}
