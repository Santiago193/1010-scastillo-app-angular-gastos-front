import { Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario';
import { InformacionComponent } from './componentes/informacion/informacion';
import { Registro } from './componentes/registro/registro';
import { ImpuestoComponent } from './componentes/impuesto/impuesto';
import { GastosComponent } from './componentes/gastos/gastos';
import { UsuariosComponent } from './componentes/usuarios/usuarios';

export const routes: Routes = [
  { path: '', redirectTo: 'informacion', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'registro', component: Registro },
  { path: 'impuesto', component: ImpuestoComponent },
  { path: 'gastos', component: GastosComponent} ,
  { path: 'usuarios', component: UsuariosComponent}

];
