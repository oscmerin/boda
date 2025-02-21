import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class PdfDownloadService {
  constructor() {}

  downloadPdf(filename: string) {
    const filePath = `assets/${filename}`;

    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, filename))
      .catch((error) => console.error('Error al descargar el PDF:', error));
  }
}
