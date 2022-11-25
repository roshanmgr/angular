import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSiteComponent } from './client-site.component';

describe('ClientSiteComponent', () => {
  let component: ClientSiteComponent;
  let fixture: ComponentFixture<ClientSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
