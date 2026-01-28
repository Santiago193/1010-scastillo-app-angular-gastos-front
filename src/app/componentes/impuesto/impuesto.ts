import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RangoSRI {
  fraccionBasica: number;
  excesoHasta: number;
  impuestoBasico: number;
  porcentaje: number;
}

@Component({
  selector: 'app-impuesto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './impuesto.html',
  styleUrls: ['./impuesto.css']
})
export class ImpuestoComponent {

  // MENSAJE DE ERROR
  mensajeError: string = '';

  // DATOS PERSONALES
  cedula: string = '';
  sueldoAnual: number = 0;

  // GASTOS PERSONALES
  gastos = {
    alimentacion: 0,
    vivienda: 0,
    educacion: 0,
    vestimenta: 0,
    salud: 0
  };

  // LÍMITES DE DEDUCCIÓN
  limites = {
    alimentacion: 3809.65,
    vivienda: 3809.65,
    educacion: 3809.65,
    vestimenta: 3809.65,
    salud: 15238.60,
    total: 15238.60
  };

  // RESULTADOS
  totalDeduccion: number = 0;
  baseImponible: number = 0;
  impuestoRenta: number = 0;

  // JSON
  jsonResultado: string = '';

  // TABLA SRI
  tablaSRI: RangoSRI[] = [
    { fraccionBasica: 0, excesoHasta: 11722, impuestoBasico: 0, porcentaje: 0 },
    { fraccionBasica: 11722, excesoHasta: 14930, impuestoBasico: 0, porcentaje: 5 },
    { fraccionBasica: 14930, excesoHasta: 19385, impuestoBasico: 160, porcentaje: 10 },
    { fraccionBasica: 19385, excesoHasta: 25638, impuestoBasico: 606, porcentaje: 12 },
    { fraccionBasica: 25638, excesoHasta: 33738, impuestoBasico: 1356, porcentaje: 15 },
    { fraccionBasica: 33738, excesoHasta: 44721, impuestoBasico: 2571, porcentaje: 20 },
    { fraccionBasica: 44721, excesoHasta: 59537, impuestoBasico: 4768, porcentaje: 25 },
    { fraccionBasica: 59537, excesoHasta: 79388, impuestoBasico: 8472, porcentaje: 30 },
    { fraccionBasica: 79388, excesoHasta: 105580, impuestoBasico: 14427, porcentaje: 35 },
    { fraccionBasica: 105580, excesoHasta: Infinity, impuestoBasico: 23594, porcentaje: 37 }
  ];

  // MÉTODO PRINCIPAL
  calcularImpuesto(): void {
    this.mensajeError = '';

    if (this.sueldoAnual <= 0) {
      this.mensajeError = '⚠️ Ingrese un sueldo anual válido.';
      return;
    }

    const totalGastos =
      this.gastos.alimentacion +
      this.gastos.vivienda +
      this.gastos.educacion +
      this.gastos.vestimenta +
      this.gastos.salud;

    if (totalGastos > this.sueldoAnual) {
      this.mensajeError = '❌ Los gastos no pueden ser mayores que el sueldo anual.';
      return;
    }

    this.calcularDeducciones();
    this.calcularBaseImponible();
    this.calcularImpuestoRenta();
    this.generarJSON();
  }

  private calcularDeducciones(): void {
    const suma =
      Math.min(this.gastos.alimentacion, this.limites.alimentacion) +
      Math.min(this.gastos.vivienda, this.limites.vivienda) +
      Math.min(this.gastos.educacion, this.limites.educacion) +
      Math.min(this.gastos.vestimenta, this.limites.vestimenta) +
      Math.min(this.gastos.salud, this.limites.salud);

    this.totalDeduccion = Math.min(suma, this.limites.total);
  }

  private calcularBaseImponible(): void {
    this.baseImponible = this.sueldoAnual - this.totalDeduccion;
  }

  private calcularImpuestoRenta(): void {
    const rango = this.tablaSRI.find(r =>
      this.baseImponible >= r.fraccionBasica &&
      this.baseImponible <= r.excesoHasta
    );

    if (!rango) {
      this.impuestoRenta = 0;
      return;
    }

    const excedente = this.baseImponible - rango.fraccionBasica;

    this.impuestoRenta =
      rango.impuestoBasico +
      (excedente * rango.porcentaje / 100);
  }

  private generarJSON(): void {
    const resultado = {
      cedula: this.cedula,
      sueldoAnual: this.sueldoAnual,
      gastos: this.gastos,
      totalDeduccion: this.totalDeduccion,
      baseImponible: this.baseImponible,
      impuestoRenta: this.impuestoRenta
    };

    localStorage.setItem('impuestoRenta', JSON.stringify(resultado));
    this.jsonResultado = JSON.stringify(resultado, null, 2);
  }
}
