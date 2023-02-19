import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'app/modules/components/components.module';
import { FuseCardModule } from '@fuse/components/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SafeModule } from 'app/modules/pipes/safe/safe.module';
import { MatSelectModule } from '@angular/material/select';
import { AvatarModule } from 'ngx-avatar';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { ToasterModule } from 'app/modules/toaster/toaster.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RoleMappingListComponent } from './components/role-mapping-list/role-mapping-list.component';
import { RoleMappinAddComponent } from './components/role-mappin-add/role-mappin-add.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

const ROUTES: Routes = [
  {
    path: '', component: RoleMappingListComponent
  },
  {
    path: 'add', component: RoleMappinAddComponent
  },
  {
    path: 'edit/:id', component: RoleMappinAddComponent
  },
]

@NgModule({
  declarations: [
    RoleMappingListComponent,
    RoleMappinAddComponent
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
    ComponentsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ]
})
export class RoleMappingModule { }
