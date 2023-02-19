import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToasterService } from 'app/modules/toaster/service/toaster.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivityService } from '../../services/activity.service';
@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.scss']
})
export class ActivityAddComponent implements OnInit {

  public isLoading = false;

  form: FormGroup;
  typeList = [1,2,3];
  public backUrl = 'activity';
  public activityId = null;
  public isProcessing = false;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private _formBuilder: FormBuilder,
    private _service: ActivityService,
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
        this.activityId = params['id'];
        if(this.activityId) {
          this._getDesignationData(this.activityId)
        }

      });
  }

  private _getDesignationData(_id: string): void {
    this._service.getActivityById(_id).subscribe(res => {
      this.form.patchValue({
      ActivityCode: res[0].ActivityCode,
      ActivityName: res[0].ActivityName,
      Description: res[0].Description,
      IsActive: res[0].IsActive,
      CreatedBy:res[0].CreatedBy
      })
    })
  }

  private _createForm() {
    this.form = this._formBuilder.group({
      ActivityCode: ['', [Validators.required]],
      ActivityName: ['', [Validators.required]],
      Description: ['', [Validators.required]],
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
    if(this.activityId) {
      values.ActivityId = this.activityId
      values.UpdatedBy=2
      delete values.CreatedBy
      this._service.updateActivity(values).subscribe(res => {
        this._router.navigate(['activity'])
        this._toasterService.showSnackbarSuccess('Activity updated successfully')
      })
    } else {
      this._service.saveActivity(values).subscribe(res => {
        this.form.reset()
        this.form.enable();
        this._toasterService.showSnackbarSuccess('Activity added successfully')
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
