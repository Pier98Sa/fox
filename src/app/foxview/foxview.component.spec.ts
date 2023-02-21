import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxviewComponent } from './foxview.component';

describe('FoxviewComponent', () => {
  let component: FoxviewComponent;
  let fixture: ComponentFixture<FoxviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoxviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoxviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
