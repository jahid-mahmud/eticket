import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'app/modules/components/components.module';
import { FuseCardModule } from '@fuse/components/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from 'app/layout/common/search/search.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SafeModule } from 'app/modules/pipes/safe/safe.module';
import { MatSelectModule } from '@angular/material/select';
import { AvatarModule } from 'ngx-avatar';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { ToasterModule } from 'app/modules/toaster/toaster.module';
import { MatMenuModule } from '@angular/material/menu';
import { ItsmCurrencyModule } from 'app/modules/pipes/itsm-number/itsm-currency.module';
import { FiscalYearModule } from '@fuse/components/fiscal-year/fiscal-year.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { UserManagementComponent } from './user-management/user-management.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ModalsModule } from '../modals/modals.module';
import { TranslocoCoreModule } from 'app/core/transloco/transloco.module';
import { AddUserComponent } from './add-user/add-user.component';

const ROUTES: Routes = [
  {
    path: '', component: UserManagementComponent
  },
  {
    path: 'add', component: AddUserComponent
  },
]

@NgModule({
  declarations: [
    UserManagementComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    FuseCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    SafeModule,
    MatSelectModule,
    AvatarModule,
    NgxMatIntlTelInputModule,
    ToasterModule,
    MatMenuModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    ComponentsModule
  ]
})
export class UsersModule { }
