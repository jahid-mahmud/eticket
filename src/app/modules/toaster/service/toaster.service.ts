import { Injectable, Type } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../component/snackbar/snackbar.component';

enum Types {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
}

@Injectable()
export class ToasterService {

  constructor(private _snackBar: MatSnackBar) { }

  public showInfo(message: string, duration: number = 2000): void {
    this._openSnackBar(message, Types.INFO, duration);
  }

  public showSuccess(message: string, duration: number = 2000): void {
    this._openSnackBar(message, Types.SUCCESS, duration);
  }

  public showError(message: string, duration: number = 2000): void {
    this._openSnackBar(message, Types.ERROR, duration);
  }

  public showSnackbarInfo(message: string, duration: number = 2000): void {
    this._openSnackBarComponent(message, Types.INFO, duration);
  }

  public showSnackbarSuccess(message: string, duration: number = 2000): void {
    this._openSnackBarComponent(message, Types.SUCCESS, duration);
  }

  public showSnackbarError(message: string, duration: number = 2000): void {
    this._openSnackBarComponent(message, Types.ERROR, duration);
  }
  

  private _openSnackBar(message: string, type: string, duration: number) {

    this._snackBar.open(message, "", {
      duration: duration,
      data: { message, type },
      panelClass: [`${type}-snackbar`],
      horizontalPosition: "end",
      verticalPosition: "bottom"
    });

  }

  private _openSnackBarComponent(message: string, type: string, duration: number) {

    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: duration,
      data: { message, type },
      panelClass: [`${type}-snackbar`, 'itsm-snackbar'],
      horizontalPosition: "end",
      verticalPosition: "bottom"
    });

  }

}
