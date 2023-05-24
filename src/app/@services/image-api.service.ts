import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Image } from '../@models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageAPIService {
  // private url = 'http://localhost:8000/';
  private url = 'http://140.116.247.180:8081/';
  constructor(private http: HttpClient) { }

  getImage(image: Image): Observable<string> {
    return this.http.get(this.url + 'dzi/' + image.path) as Observable<string>;
  }
}
