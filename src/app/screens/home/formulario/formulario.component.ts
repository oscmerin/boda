import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonaForm } from '@app/shared/interfaces/personaForm';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormularioHijoComponent } from '../formulario-hijo/formulario-hijo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-formulario',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule, FormularioHijoComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent implements OnInit {
  protected formBuilder = inject(NonNullableFormBuilder);
  public formulario: FormGroup<{
    personas: FormArray<FormGroup<PersonaForm>>;
  }> = this.formBuilder.group({
    personas: this.formBuilder.array<FormGroup<PersonaForm>>([]),
  });

  get personas() {
    return this.formulario.controls.personas;
  }

  ngOnInit() {
    // Agregamos una persona por defecto
    this.agragarPersona();
  }

  // aqui con el toSignal transformamos de observable a una señal
  personasCambian = toSignal(this.formulario.valueChanges);

  public totalPersonas = computed(() => {
    const value = this.personasCambian()?.personas?.length;
    return value;
  });

  public agragarPersona(): void {
    const id = this.personas.length + 1;
    const personaForm = this.formBuilder.group<PersonaForm>({
      id: this.formBuilder.control(id),
      nombre: this.formBuilder.control('', [Validators.required]),
      apellidos: this.formBuilder.control('', [Validators.required]),
      usaAutobus: this.formBuilder.control(false),
      tieneIntolerancias: this.formBuilder.control(false, [
        Validators.required,
      ]),
      infoIntolerancias: this.formBuilder.control(''),
      asistentePreboda: this.formBuilder.control(false, [Validators.required]),
      asistenteBoda: this.formBuilder.control(false, [Validators.required]),
      menuInfantil: this.formBuilder.control(false, [Validators.required])
    });

    this.formulario.controls.personas.push(personaForm);
  }

  public eliminarPersona(index: number): void {
    console.log('eliminarPersona.id', index);
    this.formulario.controls.personas.removeAt(index);
  }

  public confirmar(): void {
    console.log('confirmar', this.formulario.value);
  }
}
