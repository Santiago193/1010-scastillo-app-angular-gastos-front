import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './componentes/menu/menu'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent   // 👈 OBLIGATORIO
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('hola');
}
