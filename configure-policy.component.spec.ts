import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePolicyComponent } from './configure-policy.component';

describe('ConfigurePolicyComponent', () => {
  let component: ConfigurePolicyComponent;
  let fixture: ComponentFixture<ConfigurePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
