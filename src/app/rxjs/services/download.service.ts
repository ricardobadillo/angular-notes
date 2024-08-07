import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  getFile(name: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap((content) => {
        const blob = new Blob([content], { type });
        saveAs(blob, name);
      }),
      map(() => true),
    );
  }

  uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('file', file);

    return this.http.post('http://localhost:3000/ninjas/upload', dto, {
      headers: { 'Content-type': 'multipart/form-data' },
    });
  }
}
