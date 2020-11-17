import { Component } from '@angular/core';

@Component({
    selector: 'app-grafica1',
    templateUrl: './grafica1.component.html',
    styles: [
    ]
})
export class Grafica1Component {

    // Doughnut
    public labels1: string[] = ['Pan', 'Azúcar', 'Arroz'];

    public data1 = [
        [10, 15, 30]
    ];

    //  public colors: Color[] = [
    //      { backgroundColor: ['#6857E6', '#009FEE', '#FF2059'] }
    //  ];
}
