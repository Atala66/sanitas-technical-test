import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';


@Injectable()
export class HomeService {
  public baseURL = 'https://picsum.photos';

  constructor(private http: HttpClient) {}


  public getPhotosList(): Observable<any> {
	  return this.http.get('../../../assets/mocks/images-list.json');
    // return this.http.get(`${this.baseURL}/id/${id}/500/500`, { responseType: 'text' });
  }





}
