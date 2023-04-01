import { Component } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feedback-snackbar',
  templateUrl: './feedback-snackbar.component.html',
  styleUrls: ['./feedback-snackbar.component.css']
})
export class FeedbackSnackbarComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

