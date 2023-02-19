import { NgModule } from "@angular/core";
import { FuseCardModule } from '@fuse/components/card/card.module';
import { ChartComponent } from "./charts/chart.component";
import { TableComponent } from "./table/table.component";
import { TabbedCardComponent } from './tabbed-card/tabbed-card.component';
import { DateRangePickerComponent } from './date-range-picker/component/date-range-picker/date-range-picker.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ReactiveFormsModule } from "@angular/forms";
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter, MomentDateModule } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from "@angular/material/core";
import { DateCustomFormatter } from "./date-range-picker/config/DateCustomFormatter";
import { SharedModule } from "app/shared/shared.module";
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ItsmSelectComponent } from "./itsm-select/itsm-select.component";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ItsmFormTableComponent } from "./itsm-form-table/itsm-form-table.component";
import { ItsmStatusComponent } from "./itsm-status/itsm-status.component";
import { PdfViewerComponent } from './pdf-viewwe/pdf-viewwe.component';
import { PdfViewerModule } from "ng2-pdf-viewer";
import { ParagraphModule } from "../pipes/paragraph/paragraph.module";

@NgModule({
  declarations: [
    ChartComponent,
    TableComponent,
    TabbedCardComponent,
    DateRangePickerComponent,
    HeaderBarComponent,
    ItsmSelectComponent,
    AutocompleteComponent,
    ItsmFormTableComponent,
    ItsmStatusComponent,
    PdfViewerComponent
  ],
  imports: [
    SharedModule,
    FuseCardModule,
    NgxChartsModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MomentDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    PdfViewerModule,
    ParagraphModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    // { provide: MAT_DATE_FORMATS, useValue: new DateCustomFormatter() },
  ],
  exports: [
    ChartComponent,
    TableComponent,
    TabbedCardComponent,
    DateRangePickerComponent,
    HeaderBarComponent,
    ItsmSelectComponent,
    AutocompleteComponent,
    ItsmFormTableComponent,
    ItsmStatusComponent,
    PdfViewerComponent
  ],
})
export class ComponentsModule { }
