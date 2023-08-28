import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageArray } from '../@models/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }

  getImageNames(dir: string): Observable<ImageArray> {
    return this.http.get(`${environment.baseUrl}` + 'project/' + dir) as Observable<ImageArray>;
  }

}
