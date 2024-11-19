import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaiveBayesComponent } from './naive-bayes.component';

describe('NaiveBayesComponent', () => {
  let component: NaiveBayesComponent;
  let fixture: ComponentFixture<NaiveBayesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaiveBayesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaiveBayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
