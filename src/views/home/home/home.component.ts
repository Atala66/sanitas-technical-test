import { Component, OnInit, HostListener } from '@angular/core';
import { PhotoViewerModel } from 'src/app/models/photo-viewer.model';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  public imagesList: PhotoViewerModel[] = [];
  // tslint:disable-next-line:no-inferrable-types
  public isBottomScrolled: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  public page: number = 0;
  // tslint:disable-next-line:variable-name
  constructor(private _homeSrv: HomeService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getPhotosList(this.page);
  }

  public getPhotosList(page: any): void {
    // 4000 elements between 20 elements per page === 200 pages
    if (page / 20 === 3) {
      return;
    } else {
      for (let i = page; i <= page + 20; i++) {
        const id = i;
        this._homeSrv.getPhotosList(id).subscribe(
          (res: any) => {
            this.imagesList.push({
              id,
              photo:
                'https://i.picsum.photos/id/1/500/500.jpg?hmac=6vo7WkHURh9CWfdf144ASqEaPNcbj2PHJK3UgGH24lM',
              text: this.generateRandomText(),
            });
          },
          (err: any) => {
            console.log(err);
            return err;
          }
        );
      }
    }
  }

  public transformImage(img: any): void {
    const image = new Image();
    image.src = img;
  }

  public generateRandomText(): any {
    const title = ' RANDOM TEXT : ';
    const randomText =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    return `${title}${randomText}`;
  }

  @HostListener('window:scroll', ['$event'])
  public getBottomScroll(event: any): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.isBottomScrolled = true;
      if (this.isBottomScrolled) {
        this.page++;
        this.getPhotosList(this.page * 20);
         console.log('page- number::', this.page);
      }
    }
  }
}
