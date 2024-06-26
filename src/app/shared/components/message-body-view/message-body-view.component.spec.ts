import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBodyViewComponent } from './message-body-view.component';

describe('MessageBodyViewComponent', () => {
  let component: MessageBodyViewComponent;
  let fixture: ComponentFixture<MessageBodyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageBodyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageBodyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
