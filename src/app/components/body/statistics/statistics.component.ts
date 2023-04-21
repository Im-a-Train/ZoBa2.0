import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ZoBaService } from 'src/app/services/zo-ba.service';
import { ORGANISATIONS, Organisation } from '../order/order-form.data';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {

  constructor(private zoBaService: ZoBaService, private snackBar: MatSnackBar,) { }
  protected totalOrders: number = 0;
  protected organisations: Organisation[] = ORGANISATIONS;
  protected nrOfZopfeForEachOrganisation = new Map<Organisation, number>();
  protected orderTarget: number = 750;

  ngOnInit(): void {
    this.zoBaService.getTotalZopfOrders().subscribe(
      {
        error: (err) => {
          console.log(JSON.stringify(err))
          this.snackBar.open(`Beim Abrufen der Zopf-Daten ist ein Fehler passiert. \n Grund: ${err.error.errors[0].msg}`)
        },
        next: (response) => {
          this.totalOrders = parseInt(response.data)
        }
      }
    )
    this.organisations.forEach(o => {
      this.zoBaService.getZopfOrdersByOrganisation(o.code).subscribe(
        {
          error: (err) => {

          },
          next: (response) => {
            this.nrOfZopfeForEachOrganisation.set(o, parseInt(response.data))
          }
        }
      )
    })
  }
}
