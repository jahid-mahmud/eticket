import { Route } from '@angular/router';
import { Error403Component } from 'app/modules/error/error-403/error-403.component';

export const error403Routes: Route[] = [
    {
        path: '',
        component: Error403Component
    }
];
