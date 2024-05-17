import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilesComponent } from './show-files.component';

describe('ShowFilesComponent', () => {
  let component: ShowFilesComponent;
  let fixture: ComponentFixture<ShowFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
