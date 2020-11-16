import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

    // path: 'dasboard' PagesRouting
    // path: 'auth AuthRouting

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
