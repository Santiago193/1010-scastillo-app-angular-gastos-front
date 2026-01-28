import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastoService } from '../../service/gasto';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gastos.html',
  styleUrls: ['./gastos.css']
})
export class GastosComponent implements OnInit {

  gastos: any[] = [];

  constructor(private gastoService: GastoService) {}

  ngOnInit(): void {
    this.gastoService.obtenerGastos().subscribe({
      next: (data) => {
        this.gastos = data;
      },
      error: (err) => {
        console.error(err);
        alert('Error al obtener los gastos');
      }
    });
  }
}
