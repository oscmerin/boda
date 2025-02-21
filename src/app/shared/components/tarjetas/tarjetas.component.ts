import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarjetasComponent {}
