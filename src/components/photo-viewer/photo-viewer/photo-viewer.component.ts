import { Component, Input, OnInit } from '@angular/core';
import { PhotoViewerModel } from '../../../app/models/photo-viewer.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.less'],
})
export class PhotoViewerComponent implements OnInit {
  @Input() images: any[] = [];
  @Input() pageSize: any;

  constructor() {}

  ngOnInit(): void {}
}
