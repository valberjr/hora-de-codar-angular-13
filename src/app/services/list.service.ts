import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private url = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.url}/${id}`);
  }
}
