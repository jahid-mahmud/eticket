import { Component, OnInit} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ToasterService } from "app/modules/toaster/service/toaster.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { LeadStageService } from "../../services/lead-stage.service";
@Component({
  selector: 'app-lead-stage-add',
  templateUrl: './lead-stage-add.component.html',
  styleUrls: ['./lead-stage-add.component.scss']
})
export class LeadStageAddComponent implements OnInit {

  public isLoading = false;

  form: FormGroup;
  public backUrl = "lead-stage";
  public leadStageId = null;
  public isProcessing = false;
  private _unsubscribeAll: Subject<any> = new Subject(); // for clear phone number field

  constructor(
    private _formBuilder: FormBuilder,
    private _service: LeadStageService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _toasterService: ToasterService
  ) {}

  ngOnInit() {
    this._createForm();
    this._checkRoute();
  }

  private _checkRoute(): void {
    this._activatedRoute.params
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((params: ParamMap) => {
        this.leadStageId = params["id"];
        if (this.leadStageId) {
          this._getLeadStageDataById(this.leadStageId);
        }
      });
  }

  private _getLeadStageDataById(_id: string): void {
    this._service.getLeadStageById(_id).subscribe((res) => {
      this.form.patchValue({
        StageName: res[0].StageName,
        Description: res[0].Description,
        IsActive: res[0].IsActive,
        CreatedBy: res[0].CreatedBy,
      });
    });
  }

  private _createForm() {
    this.form = this._formBuilder.group({
      StageName: ["", [Validators.required]],
      Description: ["", [Validators.required]],
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
    if (this.leadStageId) {
      values.LeadStageId = this.leadStageId;
      values.UpdatedBy = 2;
      delete values.CreatedBy;
      this._service.updateLeadStage(values).subscribe((res) => {
        this._router.navigate(['lead-stage'])
        this._toasterService.showSnackbarSuccess(
          "Lead Stage updated successfully"
        );
      });
    } else{
      this._service.saveLeadStage(values).subscribe((res) => {
        this.form.reset()
        this.form.enable();
        this._toasterService.showSnackbarSuccess(
          "Lead Stage added successfully"
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
