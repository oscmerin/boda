import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PersonaForm } from '@app/shared/interfaces/personaForm';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-formulario-hijo',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, ReactiveFormsModule],
  templateUrl: './formulario-hijo.component.html',
  styleUrl: './formulario-hijo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioHijoComponent {
  formGroup = input.required<FormGroup<PersonaForm>>();
}
