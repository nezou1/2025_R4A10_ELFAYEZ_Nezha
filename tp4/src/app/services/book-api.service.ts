import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';
import { Book } from "../models/book";

@Injectable({ providedIn: 'root' })
export class BooksApiService {
  private readonly API_URL = 'http://localhost:5000';
  constructor(private readonly http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + '/books');
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_URL + `/books/${id}`).pipe(
      catchError((err) => {
        throw new Error('Une erreur est survenue:', err);
      })
    );
  }

  createBook(book: Book):Observable<Book> {
    return this.http
    .post<{ ressource_location: number }>(this.API_URL + '/books', book)
    .pipe(
      map((data) => ({ id: data.ressource_location,
        title: book.title,
        author: book.author,
        description: book.description,
        coverUrl: book.coverUrl })),
      tap((data) => console.log('data:', data))
    );
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.API_URL}/${id}`);
  }
}