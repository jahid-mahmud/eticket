import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetLinkSentToEmailModalComponent } from './reset-link-sent-to-email-modal/reset-link-sent-to-email-modal.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ComponentsModule } from 'app/modules/components/components.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const authSignupRoutes: Route[] = [
  
  {
      path:'',
      component:ResetLinkSentToEmailModalComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authSignupRoutes),
    SharedModule,
    ComponentsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SignupSuccessModule { }
