const dummyObject  = {
    id: 1,
    photo: 'https://reqres.in/img/faces/1-image.jpg',
    text: 'blablalbalbla',
  }

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a JSON structure with specific keys', () => {
    const keys = ['id', 'photo', 'text'];
    const keysFromObject = Object.keys(dummyObject);
    for (let i = 0; i < keys.length; i++) {
      expect(keys).toContain(keysFromObject[i]);
    }
  });

//   it('should create random text', () => {

//   });
});
