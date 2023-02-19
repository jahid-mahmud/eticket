import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToasterService } from 'app/modules/toaster/service/toaster.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DesignationService } from '../../services/designation.service';

@Component({
  selector: 'app-designation-add',
  templateUrl: './designation-add.component.html',
  styleUrls: ['./designation-add.component.scss']
})
export class DesignationAddComponent implements OnInit {

  public isLoading = false;

  form: FormGroup;
  typeList = [1,2,3];
  public backUrl = 'designation';
  public designationId = null;
  public isProcessing = false;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _formBuilder: FormBuilder,
    private _service: DesignationService,
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
        this.designationId = params['id'];
        if(this.designationId) {
          this._getDesignationData(this.designationId)
        }

      });
  }

  private _getDesignationData(_id: string): void {
    this._service.getDesignationById(_id).subscribe(res => {
      this.form.patchValue({
        DesignationName:res[0].DesignationName,
      Level:res[0].Level,
      IsActive: res[0].IsActive,
      CreatedBy:res[0].CreatedBy
      })
    })
  }

  private _createForm() {
    this.form = this._formBuilder.group({
      DesignationName: ['', [Validators.required]],
      Level: [1, [Validators.required]],
      IsActive: [true],
      CreatedBy:2
    });
  }


  public onClickSave() {
    this.isProcessing = true;
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    // Disable the form
    this.form.disable({emitEvent: false});
    let values= this.form.getRawValue()
    if(this.designationId) {
      values.DesignationId = this.designationId
      values.UpdatedBy=2
      delete values.CreatedBy
      this._service.updateDesignation(values).subscribe(res => {
        this._router.navigate(['designation'])
        this._toasterService.showSnackbarSuccess('Designation updated successfully')
      })
    } else {
      this._service.saveDesignation(values).subscribe(res => {
        this.form.reset()
        this.form.enable();
        this._toasterService.showSnackbarSuccess('Designation added successfully')
      })
    }
    
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
