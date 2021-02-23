import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailRestoPage } from './detail-resto.page';

describe('DetailRestoPage', () => {
  let component: DetailRestoPage;
  let fixture: ComponentFixture<DetailRestoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRestoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailRestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
