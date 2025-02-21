import { FormControl } from '@angular/forms';

export interface PersonaForm {
  id: FormControl<number>;
  nombre: FormControl<string>;
  apellidos: FormControl<string>;
  usaAutobus: FormControl<boolean>;
  tieneIntolerancias: FormControl<boolean>;
  infoIntolerancias: FormControl<string>;
  asistentePreboda: FormControl<boolean>;
  asistenteBoda: FormControl<boolean>;
}
