import { Route } from '@angular/router';
import { AuthSignUpComponent } from 'app/modules/auth/sign-up/sign-up.component';
import { NewSignupComponent } from './new-signup/new-signup.component';

export const authSignupRoutes: Route[] = [
    {
        path     : '',
        component: NewSignupComponent
    },
    
];
