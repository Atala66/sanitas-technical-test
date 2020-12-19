import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoViewerComponent } from './photo-viewer.component';
import { HomeService } from 'src/views/home/home/home.service';



@NgModule({
  declarations: [PhotoViewerComponent],
  imports: [
    CommonModule
  ],
  exports: [ PhotoViewerComponent ]
})
export class PhotoViewerModule { }
