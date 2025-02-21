import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TarjetasComponent } from '@shared/components/tarjetas/tarjetas.component';

@Component({
  selector: 'app-inicio',
  imports: [MatButtonModule, RouterLink, TarjetasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {}
