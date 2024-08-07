import { Component } from '@angular/core';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  constructor(private downloadService: DownloadService) {}

  downloadPDF() {
    this.downloadService
      .getFile('my.pdf', 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf', 'application/pdf')
      .subscribe();
  }
}
