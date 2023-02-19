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
import { LeadSourceService } from "../../services/lead-source.service";
@Component({
  selector: "app-lead-source-add",
  templateUrl: "./lead-source-add.component.html",
  styleUrls: ["./lead-source-add.component.scss"],
})
export class LeadSourceAddComponent implements OnInit {
  public isLoading = false;

  form: FormGroup;
  public backUrl = "lead-source";
  public leadSourceId = null;
  public isProcessing = false;
  private _unsubscribeAll: Subject<any> = new Subject(); // for clear phone number field

  constructor(
    private _formBuilder: FormBuilder,
    private _service: LeadSourceService,
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
        this.leadSourceId = params["id"];
        if (this.leadSourceId) {
          this._getLeadSourceDataById(this.leadSourceId);
        }
      });
  }

  private _getLeadSourceDataById(_id: string): void {
    this._service.getLeadSourcesById(_id).subscribe((res) => {
      this.form.patchValue({
        SourceName: res[0].SourceName,
        Description: res[0].Description,
        IsActive: res[0].IsActive,
        CreatedBy: res[0].CreatedBy,
      });
    });
  }

  private _createForm() {
    this.form = this._formBuilder.group({
      SourceName: ["", [Validators.required]],
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
    if (this.leadSourceId) {
      values.SourceId = this.leadSourceId;
      values.UpdatedBy = 2;
      delete values.CreatedBy;
      this._service.updateLeadSources(values).subscribe((res) => {
        this._router.navigate(['lead-source'])
        this._toasterService.showSnackbarSuccess(
          "Lead Source updated successfully"
        );
      });
    } else{
      this._service.saveLeadSources(values).subscribe((res) => {
        this.form.reset()
        this.form.enable();
        this._toasterService.showSnackbarSuccess(
          "Lead Source added successfully"
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
