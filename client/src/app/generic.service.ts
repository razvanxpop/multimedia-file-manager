import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { File } from './file';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  private backendUrl = process.env['BACKEND_URL'] || 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  fetchFiles(title: string): Observable<File[]> {
    return this.http.get<File[]>(this.backendUrl + `show-files.php?title=${title}`)
      .pipe(catchError(this.handleError<File[]>(`fetch files title=${title}`, [])));
  }

  deleteFile(id: number): Observable<any> { 
    return this.http.post(this.backendUrl + `delete-file.php`, {id: id}, this.httpOptions)
      .pipe(catchError(this.handleError<any>(`delete file where id=${id}`, [])));
  }

  addFile(title: string, format: string, genre: string, path: string): Observable<any> {
    return this.http.post<File>(this.backendUrl + 'add-file.php', {
      title: title,
      format: format,
      genre: genre,
      path: path
    }, this.httpOptions)
      .pipe(catchError(this.handleError<File>('add file')));
  }

  updateFile(id: number, title: string, format: string, genre: string, path: string): Observable<any> {
    return this.http.post<File>(this.backendUrl + 'update-file.php', {
      id: id,
      title: title,
      format: format,
      genre: genre,
      path: path
    }, this.httpOptions)
      .pipe(catchError(this.handleError<File>('update file')));
  }

  populateUpdateFields(id: number) {
    return this.http.get<File>(this.backendUrl + `populate-update-fields.php?id=${id}`)
      .pipe(catchError(this.handleError<File>(`populate update fields where id=${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
