import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements OnInit, OnChanges, OnDestroy {

  @Input('form') form: FormGroup;                 // parent components formGroup

  @Input('controlName') controlName: string;      // formControlName to bind

  @Input('list') list: string[] | Object[] = [];  // datasource

  @Input('valueKey') valueKey: string = 'value';  // value key if datasource is array of objects

  @Input('textKey') textKey: string = 'text';     // text key if datasource is array of objects

  @Input('placeholder') placeholder: string = 'Select or Write';

  @Input('label') label: string = 'Label';

  @Input('required') required: boolean = false;   // is Required isDisabled

  @Input('isDisabled') isDisabled: boolean = false; 

  @Output('onSelect') onSelect: EventEmitter<any> = new EventEmitter(); // on Select Option

  public autoCompleteList: any[] = [];
  public isFlatData: boolean = false;

  private _onKeyUp: Subject<any> = new Subject();
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {

    this._registerSearchValueChange();

  }

  private _registerSearchValueChange(): void {

    this._onKeyUp
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(value => {
        this.autoCompleteList = this.list.filter(data => {

          value = value.toLowerCase();
          
          if (this.textKey) {
            return data[this.textKey]?.toLowerCase().startsWith(value) || "";
          }

          return data?.toLowerCase().startsWith(value);
        });

        this._cd.detectChanges();
      });

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.list) {
      if (Array.isArray(changes.list.currentValue)) {
        this.isFlatData = changes.list.currentValue.length && typeof changes.list.currentValue[0] == 'string';
        this.autoCompleteList = JSON.parse(JSON.stringify(this.list));
      } else {
        throw new Error('List must be type of array');
      }

    }

  }

  public filterAutoComplete(value: string) {
    this._onKeyUp.next(value);
  }

  public autoCompleteDisplay(value) {

    if (value && this.textKey) {
      let res = this.autoCompleteList.find(_ => _[this.valueKey] == value);
      return res ? res[this.textKey] : value;
    }

    return value;
  }

  public onClickOption(option): void {
    this.onSelect.emit(option);
  }

  public hasValidationError(controlName, type = "required") {
    let control = this.form.get(controlName);
    return control?.touched && control?.hasError(type);
  }

  public ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
