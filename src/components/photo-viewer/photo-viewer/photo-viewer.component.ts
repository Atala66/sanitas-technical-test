import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/views/home/home/home.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.less'],
})
export class PhotoViewerComponent implements OnInit {
  @Input() images: any;


  // tslint:disable-next-line:variable-name
  constructor() {}

  ngOnInit(): void { }

}
