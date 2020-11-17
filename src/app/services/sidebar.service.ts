import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    menu: any[] = [
        {
            titulo: 'Dashboard',
            icono: 'mdi mdi-gauge',
            submenu: [
                { titulo: 'Main', url: '/' },
                { titulo: 'Gráficos', url: 'grafica1' },
                { titulo: 'Promesas', url: 'promesas' },
                { titulo: 'Progress Bar', url: 'progress' },
                { titulo: 'Rxjs', url: 'rxjs' }
            ]
        }
    ];

    constructor() { }
}
