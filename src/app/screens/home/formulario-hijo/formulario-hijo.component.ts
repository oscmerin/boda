import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PersonaForm } from '@app/shared/interfaces/personaForm';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-formulario-hijo',
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './formulario-hijo.component.html',
  styleUrl: './formulario-hijo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioHijoComponent {
  formGroup = input.required<FormGroup<PersonaForm>>();
}
