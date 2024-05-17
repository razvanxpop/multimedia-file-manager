import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFileComponent } from './add-file.component';

describe('AddFileComponent', () => {
  let component: AddFileComponent;
  let fixture: ComponentFixture<AddFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
