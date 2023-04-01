import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ZoBaService } from 'src/app/services/zo-ba.service';
import { FORM_STEPS } from './order-form.data';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


  constructor(private recaptchaV3Service: ReCaptchaV3Service, private zoBaService: ZoBaService, private snackBar: MatSnackBar,) {

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
        this.formData = { ...formData, ...{ captcha: token } }
        this.zoBaService.postOrder(this.formData).subscribe(
          {
            error: (err) => {
              console.log(JSON.stringify(err))
              this.snackBar.open(`Der Wert ${err.error.errors[0].value} ist ungültig. \n Grund: ${err.error.errors[0].msg}`)
            },
            complete: () => {
              this.snackBar.open('Bestellung erfolgreich', '', {
                duration: 3000
              })
            }
          }
        )
      }).unsubscribe

  }
}
