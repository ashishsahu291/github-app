import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubusersComponent } from './githubusers.component';

describe('GithubusersComponent', () => {
  let component: GithubusersComponent;
  let fixture: ComponentFixture<GithubusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
