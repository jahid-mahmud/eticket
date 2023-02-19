import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'itsm-select',
  templateUrl: './itsm-select.component.html',
  styleUrls: ['./itsm-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItsmSelectComponent implements OnInit, OnChanges {

  @Input('form') form: FormGroup;
  @Input('controlName') controlName: string;
  @Input('list') list: string[] | Object[] = [];
  @Input('valueKey') valueKey: string = 'value';
  @Input('textKey') textKey: string = 'text';
  @Input('placeholder') placeholder: string = 'Select..';
  @Input('label') label: string = '';
  @Input('required') required: boolean = false;
  @Output('onSelect') onSelect: EventEmitter<any> = new EventEmitter();
  selectedList = [];
  isFlatData: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.list) {
      if (Array.isArray(changes.list.currentValue)) {
        this.isFlatData = changes.list.currentValue.length && typeof changes.list.currentValue[0] == 'string';
        this.selectedList = JSON.parse(JSON.stringify(this.list));
      } else {
        throw new Error('List must be type of array');
      }

    }

  }

  public onKeyUp(value): void {
    this.selectedList = this._search(value);

  }

  private _search(value: string): Array<any> {
    let filterValue = value.toLowerCase();

    if (this.isFlatData) {
      return this.list.filter(data => data.toLowerCase().startsWith(filterValue));
    } else {
      return this.list.filter((object: Object) => {
        return object[this.textKey].toLowerCase().startsWith(filterValue); 
      });
    }

  }

  public onClickOption(option): void {
    this.onSelect.emit(option);
  }

  onBlur(e) {
    
    setTimeout(() => {
      e.target.value = "";
      if (this.selectedList.length == 0) {
        this.selectedList = JSON.parse(JSON.stringify(this.list));
      }
    });

  }

  public hasValidationError(controlName, type = "required") {
    let control = this.form.get(controlName);
    return control?.touched && control?.hasError(type);
  }

}
