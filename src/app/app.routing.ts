import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { InstitucionalComponent} from '../app/institucional/institucional.component';
import { HomeComponent} from '../app/home/home.component';
import { FinanciacionComponent} from '../app/financiacion/financiacion.component';
import { SalidaComponent} from '../app/salida/salida.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path: 'institucional', component: InstitucionalComponent},
    {path: 'home', component: HomeComponent},
    {path: 'financiacion', component: FinanciacionComponent},
    {path: 'salida/:id' , component: SalidaComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);