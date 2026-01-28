import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
    console.log('Servicio User funcionando');
  }

  obtenerDatos(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
