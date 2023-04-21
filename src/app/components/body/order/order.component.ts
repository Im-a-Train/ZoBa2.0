import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ZoBaService } from 'src/app/services/zo-ba.service';
import { FORM_STEPS } from './order-form.data';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


  constructor(private recaptchaV3Service: ReCaptchaV3Service, private zoBaService: ZoBaService, private snackBar: MatSnackBar, private _router: Router) {

  }
  formContent: any;
  formData: any;

  ngOnInit(): void {
    this.formContent = FORM_STEPS;
    this.formData = {};

  }
  onFormSubmit(formData: any): void {
    this.recaptchaV3Service.execute('zoba_order')
      .subscribe((token) => {
        console.log(token)
        this.formData = { ...formData, ...{ captcha: token } }
        this.zoBaService.postOrder(this.formData).subscribe(
          {
            next: (response) => {
              console.log(JSON.stringify(response))
              if (response.error) {
                this.snackBar.open(`Es ist ein Fehleraufgetreten. \n Grund: ${response.error.description}`)
              } else {
                this.snackBar.open('Bestellung erfolgreich', '', {
                  duration: 3000
                }).afterDismissed().subscribe(() => this._router.navigate(['/statistics']))
              }
            },
            error: (err) => {
              this.snackBar.open(`Es ist ein Fehleraufgetreten. \n Grund: ${err.sg}`)

            },
          }
        )
      }).unsubscribe()

  }
}
