import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PhotoViewerModule } from 'src/components/photo-viewer/photo-viewer/photo-viewer.module';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PhotoViewerModule],
  exports: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule {}
