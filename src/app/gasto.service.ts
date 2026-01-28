import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gasto } from './Gastos';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  private url = 'assets/datos.json';

  private gastos: Gasto[] = [];
  private gastosSubject = new BehaviorSubject<Gasto[]>(this.gastos);

  gastos$ = this.gastosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.cargarIniciales();
  }

  // CARGA DESDE JSON
  private cargarIniciales() {
    this.http.get<Gasto[]>(this.url).subscribe(data => {
      this.gastos = data;
      this.gastosSubject.next(this.gastos);
    });
  }

  // AGREGA DESDE FORMULARIO
  agregarGasto(gasto: Gasto) {
    this.gastos.push(gasto);
    this.gastosSubject.next(this.gastos);
  }

  // USA LA TABLA
  obtenerDatos(): Observable<Gasto[]> {
    return this.gastos$;
  }
}
