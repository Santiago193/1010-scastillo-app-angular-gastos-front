import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  private apiUrl = 'http://localhost:3000/facturas';

  constructor(private http: HttpClient) {}

  crearGasto(gasto: any): Observable<any> {
    return this.http.post(this.apiUrl, gasto);
  }

  obtenerGastos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
