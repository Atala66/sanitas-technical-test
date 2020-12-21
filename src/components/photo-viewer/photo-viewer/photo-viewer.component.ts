import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhotoViewerModel } from '../../../app/models/photo-viewer.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.less'],
})
export class PhotoViewerComponent implements OnInit {
  @Input() images: PhotoViewerModel[] = [];
  @Input() pageSize: any;

  public filterForm: FormGroup | any;

  constructor() {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.filterForm = new FormGroup({
      search: new FormControl(null),
    });
  }

}
