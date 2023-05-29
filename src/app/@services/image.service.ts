import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageArray } from '../@models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // private url = 'http://localhost:8000/';
  private url = 'http://140.116.247.180:8081/';
  constructor(private http: HttpClient) { }

  getImageNames(dir: string): Observable<ImageArray> {
    return this.http.get(this.url + 'projects/' + dir) as Observable<ImageArray>;
  }

}
