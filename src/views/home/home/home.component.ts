import { Component, OnInit, HostListener } from '@angular/core';
import { PhotoViewerModel } from 'src/app/models/photo-viewer.model';


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
  constructor() {}

  ngOnInit(): void {
    this.getPhotosList(this.page);
  }

  public getPhotosList(page: any): any {
    // 4000 elements between 20 elements per page === 200 pages
    if (page / 20 === 200) {
      return;
    } else {
      for (let i = page; i <= page + 20; i++) {
        const id = i;
        this.imagesList.push({
          // tslint:disable-next-line:object-literal-shorthand
          id: id,
          photo: `https://picsum.photos/id/${id}/500/500.jpg`,
          text: this.generateRandomText(),
        });
      }
    }
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
