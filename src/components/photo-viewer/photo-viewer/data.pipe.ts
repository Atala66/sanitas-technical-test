import { Pipe, PipeTransform } from '@angular/core';
import { PhotoViewerModel } from 'src/app/models/photo-viewer.model';

@Pipe({
  name: 'dataPipe',
  pure: false,
})
export class DataPipe implements PipeTransform {
  transform(data: PhotoViewerModel[], args?: any): any {
    if (!args) {
      return data;
    } else {
      //   console.log(typeof data);
       return data.filter(item => item.id === item.id);
    }
  }
}
