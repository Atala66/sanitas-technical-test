import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoViewerComponent } from './photo-viewer.component';
import { DataPipe } from './data.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhotoViewerComponent, DataPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PhotoViewerComponent, DataPipe],
  providers: [DataPipe],
})
export class PhotoViewerModule {}
