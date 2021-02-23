import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidateOrderPage } from './validate-order.page';

describe('ValidateOrderPage', () => {
  let component: ValidateOrderPage;
  let fixture: ComponentFixture<ValidateOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
