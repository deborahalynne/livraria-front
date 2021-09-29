import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/Book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = `${environment.apiUrl}/book`;

  constructor(private http: HttpClient) {}

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(
      `${this.baseUrl}/post`,
      book
    );
  }

  list(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/get`);
  }

}
