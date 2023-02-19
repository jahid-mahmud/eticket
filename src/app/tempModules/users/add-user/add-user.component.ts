import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { QueryModel } from 'app/core/model/data.model';
import { CoreDataService } from 'app/core/services/core-data.service';
import { GetCountries } from 'app/core/utility/static-data/coutries';
import { GetDistricts } from 'app/core/utility/static-data/district';
import { GetValidData } from 'app/core/utility/utility';
import { ToasterService } from 'app/modules/toaster/service/toaster.service';
import { Subject } from 'rxjs';
import { debounceTime, finalize, pairwise, startWith, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public isLoading = false;

  form: FormGroup;
  typeList = [
    "Corporate",
    "Dealer",
    "Individual"
  ];

  public districtList = GetDistricts();
  public countryList = GetCountries();
  public areaCodeList = [];
  public backUrl = '';
  public preferredCountry = ['bd'];
  public defaultCountry: string = 'Bangladesh';
  public showDropdown: boolean = true;
  public customerId = null;
  public isProcessing = false;
  private _unsubscribeAll: Subject<any> = new Subject();

  @ViewChild('phoneNumber') phone: FormControl; // for clear phone number field

  constructor(
    private _formBuilder: FormBuilder,
    private _coreDataService: CoreDataService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _toasterService: ToasterService) { }

  ngOnInit() {
    this._createForm();
    this._checkRoute();
  }

  private _checkRoute(): void {
    this._activatedRoute.params
      .pipe(
        takeUntil(this._unsubscribeAll)
      ).subscribe((params: ParamMap) => {
        this.customerId = params['id'];
        if (window.location.href.includes('edit') && !this.customerId) {
          this._router.navigate(['customers', 'list']);
          this.backUrl = 'customers/list'
        } else if (this.customerId) {
          this.backUrl = 'customers/details/' + this.customerId
          this._getCustomerData(this.customerId);
        }

      });
  }

  private _getCustomerData(_id: string): void {

    

  }

  private _createForm() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      type: ['Individual', [Validators.required]],
      bin: ['', [
        Validators.min(1),
        Validators.minLength(13),
        Validators.maxLength(13)
      ]],
    });
  }


  public onClickSave() {
    this.isProcessing = true;
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    // Disable the form
    this.form.disable({emitEvent: false});

    

    
  }

  private _updateData(_id: string): void {



  }

 

  public hasValidationError(controlName, type = "required") {
    let control = this.form.get(controlName);
    return control?.touched && control?.hasError(type);
  }



  public onClickBack() {
    this._router.navigate(['customers', 'list']);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
