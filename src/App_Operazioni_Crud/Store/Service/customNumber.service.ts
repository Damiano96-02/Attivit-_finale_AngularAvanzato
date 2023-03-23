import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../App_Operazioni_Crud/environments/environment';

@Injectable()
export class CustomNumberService {
  constructor(private http: HttpClient) {}

  edit(number: number) {
    return this.http.patch<number>(
      `${environment.API_URL}` + 'modifica',
      number
    );
  }
}
