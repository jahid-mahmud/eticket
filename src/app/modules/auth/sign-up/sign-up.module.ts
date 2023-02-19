import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignUpComponent } from 'app/modules/auth/sign-up/sign-up.component';
import { authSignupRoutes } from 'app/modules/auth/sign-up/sign-up.routing';
import { NewSignupComponent } from './new-signup/new-signup.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { ComponentsModule } from 'app/modules/components/components.module';
import { MatButtonModule } from '@angular/material/button';
import { ToasterModule } from 'app/modules/toaster/toaster.module';
import { ResetLinkSentToEmailModalComponent } from '../signup-success/reset-link-sent-to-email-modal/reset-link-sent-to-email-modal.component';
import { TranslocoCoreModule } from 'app/core/transloco/transloco.module';
import { ReusalesModule } from 'app/tempModules/reusables/reusales.module';

@NgModule({
    declarations: [
        AuthSignUpComponent,
        NewSignupComponent,
        ResetLinkSentToEmailModalComponent
    ],
    imports: [
        RouterModule.forChild(authSignupRoutes),
        FuseCardModule,
        FuseAlertModule,
        SharedModule,
        MatStepperModule,
        NgxMatIntlTelInputModule,
        ComponentsModule,
        MatButtonModule,
        ToasterModule,
        TranslocoCoreModule,
        ReusalesModule
        
    ]
})
export class AuthSignUpModule {
}
