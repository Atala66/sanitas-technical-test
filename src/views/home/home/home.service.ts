import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HomeService {
  public baseURL = 'https://picsum.photos';

  constructor(private http: HttpClient) {}

// not used
  public getPhotosList(id: number): Observable<any> {
     return this.http.get(`${this.baseURL}/id/${id}/200/300`, { responseType: 'arraybuffer' });
  }



}
