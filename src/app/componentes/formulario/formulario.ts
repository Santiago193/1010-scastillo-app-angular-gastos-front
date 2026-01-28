import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GastoService } from '../../service/gasto';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class FormularioComponent {

  constructor(private gastoService: GastoService) {}

  // Campos del formulario
  ruc: string = '';
  valorFactura: number = 0;
  tipoGasto: string = '';

  // Campos resumen
  rucMostrado: string = '---';
  valorMostrado: number = 0;
  gastoMostrado: string = 'Ninguno';

  agregar(): void {

    if (!this.ruc || this.valorFactura <= 0 || !this.tipoGasto) {
      
      return;
    }

    // OBJETO QUE VA AL BACKEND
    const gasto = {
      ruc: this.ruc,
      valor: this.valorFactura,
      tipoGasto: this.tipoGasto
    };

    // POST REAL
    this.gastoService.crearGasto(gasto).subscribe({
      next: () => {
        // mostrar resumen
        this.rucMostrado = this.ruc;
        this.valorMostrado = this.valorFactura;
        this.gastoMostrado = this.tipoGasto;

        // limpiar formulario
        this.ruc = '';
        this.valorFactura = 0;
        this.tipoGasto = '';
      },
      error: (err) => {
        console.error(err);
        alert('Error al guardar el gasto');
      }
    });
  }
}
