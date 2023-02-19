import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { Roles } from './core/config/system.config';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboard'
    { path: '', pathMatch: 'full', redirectTo: 'designation' },

    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'designation' },

    // Auth routes for guests
    {
        path: '',
       
        component: LayoutComponent,
        data: {
            layout: 'empty',

        },
        children: [
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule), }

        ]
    },

    // Auth routes for authenticated user



    // Dashboard home routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            // {
            //     path: 'users',
            //     data: {
            //         roles: [Roles.ADMIN]
            //     },
            //     loadChildren: () => import('app/tempModules/users/users.module').then(m => m.UsersModule),

            // },
            {
                path: 'designation',
                data: {
                    roles: [Roles.ADMIN]
                },
                loadChildren: () => import('app/tempModules/designation/designation.module').then(m => m.DesignationModule),

            },
            {
                path: 'lead-source',
                data: {
                    roles: [Roles.ADMIN]
                },
                loadChildren: () => import('app/tempModules/lead-source/lead-source.module').then(m => m.LeadSourceModule),

            },
            {
                path: 'lead-stage',
                data: {
                    roles: [Roles.ADMIN]
                },
                loadChildren: () => import('app/tempModules/lead-stage/lead-stage.module').then(m => m.LeadStageModule),

            },
            {
                path: 'products',
                data: {
                    roles: [Roles.ADMIN]
                },
                loadChildren: () => import('app/tempModules/products/products.module').then(m => m.ProductsModule),

            },
            {
                path: 'role-mapping',
                data: {
                    roles: [Roles.ADMIN]
                },
                loadChildren: () => import('app/tempModules/role-mapping/role-mapping.module').then(m => m.RoleMappingModule),

            },
            {
                path: 'message',
                data: {
                    roles: [Roles.ADMIN]
                },
                loadChildren: () => import('app/tempModules/messages/messages.module').then(m => m.MessagesModule),

            },
            {
                path: 'activity',
                data: {
                    roles: [Roles.ADMIN]
                },
                loadChildren: () => import('app/tempModules/activity/activity.module').then(m => m.ActivityModule),

            },
           
            // 404 & Catch all
            { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/error/error-404/error-404.module').then(m => m.Error404Module) },
            { path: '**', redirectTo: '404-not-found' }
        ]
    },

    // Role based routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            roles: [
                Roles.ADMIN,
            ],
        },
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [

            // 404 & Catch all
            { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/error/error-404/error-404.module').then(m => m.Error404Module) },
            { path: '**', redirectTo: '404-not-found' }
        ]
    }
];
