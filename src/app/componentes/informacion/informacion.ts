import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacion.html',
  styleUrls: ['./informacion.css']
})
export class InformacionComponent {

  gastos = [
    {
      nombre: 'Vivienda',
      descripcion: 'Gastos relacionados con hipoteca, renta y servicios básicos.',
      imagen: 'assets/imagenes/vivi.jpg',
      mostrarInfo: false
    },
    {
      nombre: 'Salud',
      descripcion: 'Consultas médicas, medicamentos y seguros de salud.',
      imagen: 'assets/imagenes/salu.jpg',
      mostrarInfo: false
    },
    {
      nombre: 'Educación',
      descripcion: 'Colegiaturas, libros y material educativo.',
      imagen: 'assets/imagenes/edu.jpg',
      mostrarInfo: false
    }
  ];

  mostrarInformacion(gasto: any) {
    gasto.mostrarInfo = !gasto.mostrarInfo;
  }

  borrarGasto(index: number) {
    this.gastos.splice(index, 1);
  }
}
