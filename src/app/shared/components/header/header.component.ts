import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PdfDownloadService } from '@core/services/pdf-download.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private pdfService: PdfDownloadService) {}

  descargarPDF() {
    this.pdfService.downloadPdf('DOSSIER_2025.pdf');
  }
}
