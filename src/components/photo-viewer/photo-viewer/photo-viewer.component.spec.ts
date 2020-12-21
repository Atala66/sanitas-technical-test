import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoViewerComponent } from './photo-viewer.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { DataPipe } from './data.pipe';

describe('PhotoViewerComponent', () => {
  let component: PhotoViewerComponent;
  let fixture: ComponentFixture<PhotoViewerComponent>;
  let debugCssElement: DebugElement;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoViewerComponent, DataPipe],
      imports: [BrowserModule],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(PhotoViewerComponent);
    component = fixture.componentInstance;
    component.images = [];
    debugCssElement = fixture.debugElement.query(By.css('form'));
    nativeElement = debugCssElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recive data from @Input', () => {
    component.images = [
      {
        id: 0,
        photo: 'https://picsum.photos/id/${id}/500/500.jpg',
        text: 'blablalblalva',
      },
    ];
    expect(component.images).toEqual(component.images);
    fixture.detectChanges();
  });
});
