import { Component, OnInit } from '@angular/core';
import { PhotoViewerModel } from 'src/app/models/photo-viewer.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  public imagesList: PhotoViewerModel[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _homeSrv: HomeService) {
  }

  ngOnInit(): void {
    this.getPhotosList();
  }

  public getPhotosList(): void {
    this._homeSrv.getPhotosList().subscribe(
      (res: any) => {
        if (res && res.images.length) {
          this.imagesList = res.images;
          console.log('imagesList::', this.imagesList);
        }
      },
      (err: any) => {
        console.log(err);
        return err;
      }
    );
  }
}
