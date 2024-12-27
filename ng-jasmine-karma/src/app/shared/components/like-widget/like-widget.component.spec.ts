import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueService } from '../../services/unique-service/unique-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueService],
      imports: [FontAwesomeModule],
    })
    .compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  beforeEach(() => {
    component = fixture.componentInstance;
  });

  it('Componente deve ser criado sem falhas', () => {
    expect(component).toBeTruthy();
  });

  it('Deve auto-gerar ID quando (@Input id) NAO estiver definida', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('NAO Deve auto-gerar ID quando (@Input id) estiver definida', () => {
    const someID = 'someID';
    component.id = someID;
    fixture.detectChanges();
    expect(component.id).toBe(someID);
  });

  // Testes assincronos
  it(`${LikeWidgetComponent.prototype.like.name} deve ser disparado emissao quando chamado. Estratégia #1`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => { // A inscricao deve ocorrer antes do metodo ser chamado.
      expect(true).toBeTrue();
      done(); // argumento do it
    });
    component.like();
  });

  it(`${LikeWidgetComponent.prototype.like.name} deve ser disparado (@Output liked) quando chamado. Estratégia #2`, () => {
    fixture.detectChanges();
    spyOn(component.liked, 'emit');
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
