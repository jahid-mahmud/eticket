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
import { ProductsService } from "../../services/products.service";
@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {

  public isLoading = false;

  form: FormGroup;
  public backUrl = "lead-stage";
  public productId = null;
  public isProcessing = false;
  private _unsubscribeAll: Subject<any> = new Subject(); // for clear phone number field

  constructor(
    private _formBuilder: FormBuilder,
    private _service: ProductsService,
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
        this.productId = params["id"];
        if (this.productId) {
          this._getProductDataById(this.productId);
        }
      });
  }

  private _getProductDataById(_id: string): void {
    this._service.getProductById(_id).subscribe((res) => {
      this.form.patchValue({
        ProductName: res[0].ProductName,
        Description: res[0].Description,
        IsActive: res[0].IsActive,
        CreatedBy: res[0].CreatedBy,
      });
    });
  }

  private _createForm() {
    this.form = this._formBuilder.group({
      ProductName: ["", [Validators.required]],
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
    if (this.productId) {
      values.productId = this.productId;
      values.UpdatedBy = 2;
      delete values.CreatedBy;
      this._service.updateProduct(values).subscribe((res) => {
        this._router.navigate(['products'])
        this._toasterService.showSnackbarSuccess(
          "Product updated successfully"
        );
      });
    } else{
      this._service.saveProduct(values).subscribe((res) => {
        this.form.reset()
        this.form.enable();
        this._toasterService.showSnackbarSuccess(
          "Product added successfully"
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
