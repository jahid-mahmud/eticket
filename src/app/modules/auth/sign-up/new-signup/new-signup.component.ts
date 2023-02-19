import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { TranslocoService } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { GetDomain } from 'app/core/domain-provider/domain-provider';
import { dataRangeTypeConst, DateRangePickerComponent } from 'app/modules/components/date-range-picker/component/date-range-picker/date-range-picker.component';
import { ToasterService } from 'app/modules/toaster/service/toaster.service';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';

@Component({
  selector: 'app-new-signup',
  templateUrl: './new-signup.component.html',
  styleUrls: ['./new-signup.component.scss'],
  animations: fuseAnimations
})
export class NewSignupComponent implements OnInit {
  @ViewChild('birhdatePicker') public bdPicker: DateRangePickerComponent;
  @ViewChild('expiryDatePicker') public expiryDatePicker: DateRangePickerComponent;
  @ViewChild('issueDatePicker') public issuDatePicker: DateRangePickerComponent;
  @ViewChild('phoneNumber') public phoneNumberFeild: NgxMatIntlTelInputComponent
  investorTypes = ["Person", 'Company'];
  documentTypes = ["National Identification Card", 'Passport'];
  files: File[] = [];
  checkTerms = false;
  checkWarnings = false;
  salutations = ["Mr", "Mrs"];
  newsLetterSubscribed = false;
  isCompany = false;
  dateRangeType: string = dataRangeTypeConst.matDatePicker;
  selectedDate = new Date();
  selectedIssueDate = new Date();
  selectedExpiryDate = new Date();
  isSubmitting = false;
  isLinear = false;
  activeLang: string;
  currentStep = 0;
  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  signInFormOne: FormGroup;
  signInFormTwo: FormGroup;
  showAlert: boolean = false;
  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private render: Renderer2,
    private elementRef: ElementRef,
    private _toasterService: ToasterService,
    private translate: TranslocoService,
    private dateAdapter: DateAdapter<any>
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.signInFormOne = this._formBuilder.group({
      investorTtype: [null, Validators.required],
      salutation: [null],
      firstName: [null, Validators.required],
      surName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      mobile: [null,],
      dateOfBirth: [new Date().toISOString(), Validators.required],
      profession: [null, Validators.required],
      // houseNo: [null, Validators.required],
      // roadNo: [null, Validators.required],
      address: [null, Validators.required],
      city: [null],
      postCode: [null, Validators.required],
      country: [null, Validators.required]

    });
    this.signInFormTwo = this._formBuilder.group({
      documentType: [null],
      documentNumber: [null],
      issuingAuthority: [null, Validators.required],
      issueDate: [new Date().toISOString(), Validators.required],
      expiryDate: [new Date().toISOString()],
      iBan: [null, Validators.required],
      bic: [null],
    });
    this.activeLang = this.translate.getActiveLang();
    this.dateAdapter.setLocale(this.activeLang);
    this.translate.langChanges$.subscribe(data => {
      this.activeLang = data;
      this.dateAdapter.setLocale(this.activeLang);
    })
    this.signInFormOne.valueChanges.subscribe(data => {
    })

  }

  public get signInFormOneControls() {
    return this.signInFormOne.controls;
  }
  public get signInFormTwoControls() {
    return this.signInFormTwo.controls;
  }


  onFileChange(files: FileList, input: HTMLInputElement) {
    if (this.files.length + Array.from(files).length > 4) {
      this._toasterService.showSnackbarError(`You can't upload more than 4 files`, 3000);
      return;
    }
    const isFileLargerThanFiveMegaBytes = Array.from(files).some((file) => {
      let size = file.size > 0 ? ((file.size / 1024) / 1024) : 0;
      if (size > 5) {
        return true;
      }
    });
    if (isFileLargerThanFiveMegaBytes) {
      input.value = '';
      this._toasterService.showSnackbarError('File size should not be greater than 5 mb', 3000);
      this.alert = {
        type: 'error',
        message: 'File size should not be greater than 5 mb'
      };
      this.showAlert = true;
      return;
    }
    const notImageOrPdf = Array.from(files).some(file => {
      if (file.type !== "application/pdf" &&
        file.type !== "application/wps-office.pdf" &&
        file.type !== 'application/pdf' && file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== "image/png") {
        return true;
      }
    })

    if (notImageOrPdf) {
      input.value = '';
      this._toasterService.showSnackbarError('File type must contain (JPEG/JPG/PNG/PDF)', 3000);
      this.alert = {
        type: 'error',
        message: 'File type must contain (JPEG/JPG/PNG/PDF)'
      };
      this.showAlert = true;
      return;
    }
    this.files = [...this.files, ...Array.from(files)];
    input.value = '';

  }
  fileClick(input: HTMLInputElement, $event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    input.click();
    $event.stopPropagation();
  }

  navigateToLogin() {
    this._router.navigateByUrl('/sign-in')
  }
  onSelectionChange($event) {
    this.isCompany = $event.value === 'Company';
    if (this.isCompany) {
      this.signInFormOne.addControl('companyName', new FormControl('', Validators.required));
      this.signInFormOne.addControl('objectOfBusiness', new FormControl('', Validators.required));
      this.signInFormOne.addControl('companyRegNumber', new FormControl('', Validators.required));
    }
    else {
      this.signInFormOne.removeControl('companyName');
      this.signInFormOne.removeControl('objectOfBusiness');
      this.signInFormOne.removeControl('companyRegNumber');
    }
  }
  onSubmit() {

    if (this.signInFormTwo.invalid) {
      // return;
    }
    this.signInFormTwo.disable();
    this.showAlert = false;
    let payload = {
      ...this.signInFormOne.value, ...this.signInFormTwo.value,
      newsLetterSubscribed: this.newsLetterSubscribed,
      document: this.files[0] ?? null,
      language: this.activeLang
    };

    this.isSubmitting = true;

    this._authService.signUp(payload, this.files).subscribe(data => {
      this.isSubmitting = false;
      //reset
      this._router.navigate(['/signup-success']);
      this._toasterService.showSnackbarSuccess('Successfully created account, Please wait for SuperAdmin to verify!', 3000);

    }, err => {
      // Re-enable the form
      this.signInFormTwo.enable();

      // Reset the form
      // this.signInFormTwo.reset();
      if (err.error instanceof ProgressEvent) {
        this._toasterService.showSnackbarError("There might an issue with file size in server", 3000);
      }
      else {
        this._toasterService.showSnackbarError(err.error.message, 3000);
      }
      this.alert = {
        type: 'error',
        message: 'Something Went Wrong, Please Try Again.'
      };
      // Set the alert


      // Show the alert
      this.showAlert = true;

      //reset 
      this.isSubmitting = false;
      // this.reset();
    });

  }
  onSelectionChangeStep($event) {

    this.currentStep = $event.selectedIndex;

  }
  onCancel($event) {
    this._router.navigate(['/sign-in'])
  }
  cancelFormTwo($event) {
    this.currentStep = 0;
  }
  public onChangeIssueDate(date): void {
    this.signInFormTwo.get('issueDate').setValue(new Date(date).toISOString());
    this.selectedIssueDate = new Date(date);
  }
  public onChangeExpiryDate(date): void {
    this.signInFormTwo.get('expiryDate').setValue(new Date(date).toISOString());
  }
  public onChangeBirthDate(date): void {
    this.signInFormOne.get('dateOfBirth').setValue(new Date(date).toISOString());
  }
  onFileClose(file: File, index: number) {
    this.files = this.files.filter(x => x !== file);
  }

  @HostListener('keyup.enter', ['$event']) onEnter($event) {
    $event.preventDefault();
    $event.stopPropagation();
    return;
  }
  onLangChange($event) {
    this.translate.setActiveLang($event.value);
    localStorage.setItem('lang', $event.value);
  }
  navigateterm() {

    window.open('/assets/docs/terms.pdf','_blank');

  }
  navigatewarn(){
    window.open('/assets/docs/risk.pdf','_blank');
  }
}
