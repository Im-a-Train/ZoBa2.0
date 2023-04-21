import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZoBaResponse } from './zoba.response';

@Injectable({
  providedIn: 'root'
})
export class ZoBaService {

  constructor(private http: HttpClient) { }

  postOrder(formData: any): Observable<ZoBaResponse> {
    // remove empty properties
    Object.keys(formData).forEach(key => {
      if (formData[key] == null || formData[key] == '') {
        delete formData[key];
      }
    });
    // remove spaces
    formData['phone'] = (formData['phone'] as string).replace(/\s/g, "")

    return this.http.post<ZoBaResponse>('http://localhost:8000/zoBaOrder', formData);
  }

  getTotalZopfOrders(): Observable<ZoBaResponse> {
    return this.http.get<ZoBaResponse>('http://localhost:8000/zoBaOrder/count')
  }
  getZopfOrdersByOrganisation(organisationCode: string): Observable<ZoBaResponse> {
    return this.http.get<ZoBaResponse>(`http://localhost:8000/zoBaOrder/count?organisation=${organisationCode}`)
  }
}
