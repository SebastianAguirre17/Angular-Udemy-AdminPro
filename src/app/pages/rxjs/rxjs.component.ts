import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styles: []
})
export class RxjsComponent implements OnDestroy{

    public intervaSubs: Subscription;

    constructor() {

        // this.retornaObs().pipe(
        //     retry(2)
        // ).subscribe(
        //     valor => console.log('Valor', valor),
        //     error => console.error('Error', error),
        //     () => console.info('Obs terminado!')
        // );

        this.intervaSubs = this.retornaIntervalo()
            .subscribe(console.log);
    }

    ngOnDestroy(): void {
        this.intervaSubs.unsubscribe();
    }

    retornaIntervalo(): Observable<number> {
        return interval(500)
            .pipe(
                map(valor => valor + 1),
                filter(valor => (valor % 2 === 0) ? true : false)
                // take(10)
            );

    }

    retornaObs(): Observable<number> {
        let i = -1;

        return new Observable<number>(observer => {

            const intervalo = setInterval(() => {
                i++;
                observer.next(i);

                if (i === 5) {
                    clearInterval(intervalo);
                    observer.complete();
                }

                if (i === 2) {
                    i = 0;
                    observer.error('i vale 2');
                }

            }, 1000);
        });
    }
}
