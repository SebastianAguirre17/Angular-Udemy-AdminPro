import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promesas',
    templateUrl: './promesas.component.html',
    styles: [
    ]
})
export class PromesasComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

        this.getUsuarios().then(users => console.log(users));

        // const promesa = new Promise((resolve, reject) => {

        //     if (false)
        //         resolve('Hola Mundo :)');
        //     else
        //         reject('Error');
        // });

        // promesa.then((msg) => {
        //     console.log(msg);
        // }).catch(error => {
        //     console.log('Error en promesa', error);
        // });

        // console.log('Fin del Init');
    }

    getUsuarios() {
        return new Promise((resolve) => {

            fetch('https://reqres.in/api/users')
                .then(resp => resp.json())
                .then(body => resolve(body.data));
        });
    }
}
