import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdressesPage } from './adresses.page';

describe('AdressesPage', () => {
  let component: AdressesPage;
  let fixture: ComponentFixture<AdressesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdressesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
