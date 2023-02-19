import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from "@angular/core";

export interface TabConfig {
    label: string;
    subTitle?: string;
    disabled?: boolean;
    toolTipData?: string;
    labelTemplate?: TemplateRef<any>;
    contentTemplate?: TemplateRef<any>;
}

@Component({
    selector: "app-tabbed-card",
    templateUrl: "./tabbed-card.component.html",
    styleUrls: ["./tabbed-card.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class TabbedCardComponent implements OnInit {
    @Input() tabConfig: TabConfig[];
    @Input() tabBarPosition: string;
    @Input() animationDuration: string;
    @Input() selectedDate: string;

    @Input() dateView: Boolean = false;
    @Input() chartMode: Boolean = true;
    tableView: boolean = false;

    @Output() onSelectViewChangeEvent = new EventEmitter<any>();
    @Output() onDateRangeChangeEvent = new EventEmitter<any>();
    @Output() tabChange: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
    }

    onTabChange(event) {
        this.tabChange.emit(event)
    }


    onDateRangeChange($event) {
        if (this.dateView) {
            this.onDateRangeChangeEvent.emit($event);
        }
    }

    onSelectViewChange(view) {
        this.tableView = view === "table";
        if (this.chartMode) {
            this.onSelectViewChangeEvent.emit(this.tableView);
        }
    }

}