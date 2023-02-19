import { Component, OnInit} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ToasterService } from "app/modules/toaster/service/toaster.service";
import { ActivityService } from "app/tempModules/activity/services/activity.service";
import { DesignationService } from "app/tempModules/designation/services/designation.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { RoleMappingService } from "../../services/role-mapping.service";
interface Designation {
  DesignationId: string;
  DesignationName: string;
}
@Component({
  selector: 'app-role-mappin-add',
  templateUrl: './role-mappin-add.component.html',
  styleUrls: ['./role-mappin-add.component.scss']
})

export class RoleMappinAddComponent implements OnInit {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  public isLoading = false;

  form: FormGroup;
  public backUrl = "role-mapping";
  public roleMappingId = null;
  public isProcessing = false;
  private _unsubscribeAll: Subject<any> = new Subject();
  designations:any [] = []
  activities: any [] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _service: RoleMappingService,
    private _designationSerice:DesignationService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _toasterService: ToasterService,
    private _activityService:ActivityService
  ) {}

  ngOnInit() {
    this._createForm();
    this._checkRoute();
    this._get_designations()
    this._get_activities()
  }

  private _checkRoute(): void {
    this._activatedRoute.params
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((params: ParamMap) => {
        this.roleMappingId = params["id"];
        if (this.roleMappingId) {
          this._getProductDataById(this.roleMappingId);
        }
      });
  }
  private _get_designations() {
    this._designationSerice.getDesignations().subscribe((res) => {
      this.designations = res
      console.log(this.designations)
    })
  }
  private _get_activities() {
    this._activityService.getActivitys().subscribe(res => {
      this.activities = res
    })
  }

  private _getProductDataById(_id: string): void {
    this._service.getRoleMappingById(_id).subscribe((res) => {
      this.form.patchValue({
        DesignationId: res[0].DesignationId,
        ActivityId: res[0].ActivityId,
        IsActive: res[0].IsActive,
        CreatedBy: res[0].CreatedBy,
      });
    });
  }

  private _createForm() {
    this.form = this._formBuilder.group({
      DesignationId: ["", [Validators.required]],
      ActivityId:  ["", [Validators.required]],
      IsActive: [true],
      CreatedBy: 2,
    });
  }

  public onClickSave() {
    this.isProcessing = true;
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    // Disable the form
    this.form.disable({ emitEvent: false });
    let values = this.form.getRawValue();
    if (this.roleMappingId) {
      values.RoleMappingId = this.roleMappingId;
      values.UpdatedBy = 2;
      delete values.CreatedBy;
      this._service.updateRoleMapping(values).subscribe((res) => {
        this._router.navigate(['role-mapping'])
        this._toasterService.showSnackbarSuccess(
          "Activity Role Mapping updated successfully"
        );
      },error=> {
        this._toasterService.showError(
          error
        );
      });
    } else{
      this._service.saveRoleMapping(values).subscribe((res) => {
        this.form.reset()
        this.form.enable();
        this._toasterService.showSnackbarSuccess(
          "Activity Role Mapping added successfully"
        );
      },error=> {
        this._toasterService.showError(
          error
        );
      });
    }
    
  }

  public hasValidationError(controlName, type = "required") {
    let control = this.form.get(controlName);
    return control?.touched && control?.hasError(type);
  }

  public onClickBack() {
    this._router.navigate(["customers", "list"]);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

