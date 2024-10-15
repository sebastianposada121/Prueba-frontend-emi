import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersGraphComponent } from './followers-graph.component';

describe('FollowersGraphComponent', () => {
  let component: FollowersGraphComponent;
  let fixture: ComponentFixture<FollowersGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowersGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowersGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
