import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoBaService {

  constructor(private http: HttpClient) { }

  postOrder(formData: any): Observable<any> {
    // remove empty properties
    Object.keys(formData).forEach(key => {
      if (formData[key] == null || formData[key] == '') {
        delete formData[key];
      }
    });
    formData['phone'] = (formData['phone'] as string).replace(/\s/g, "")
    console.log(formData)
    return this.http.post('http://localhost:8000/zoBaOrder', formData)
  }
}
