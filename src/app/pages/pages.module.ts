import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Módulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        Grafica1Component,
        AccountSettingsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
        ComponentsModule
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        Grafica1Component,
        AccountSettingsComponent
    ]
})
export class PagesModule { }
