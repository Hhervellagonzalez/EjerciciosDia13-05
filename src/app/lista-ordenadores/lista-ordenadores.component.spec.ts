import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenadoresComponent } from './lista-ordenadores.component';

describe('ListaOrdenadoresComponent', () => {
  let component: ListaOrdenadoresComponent;
  let fixture: ComponentFixture<ListaOrdenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaOrdenadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaOrdenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
