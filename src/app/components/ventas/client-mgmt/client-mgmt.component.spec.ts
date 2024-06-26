import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMgmtComponent } from './client-mgmt.component';

describe('ClientMgmtComponent', () => {
  let component: ClientMgmtComponent;
  let fixture: ComponentFixture<ClientMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMgmtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
