import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsContentComponent } from './subscriptions-content.component';

describe('SubscriptionsContentComponent', () => {
  let component: SubscriptionsContentComponent;
  let fixture: ComponentFixture<SubscriptionsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
