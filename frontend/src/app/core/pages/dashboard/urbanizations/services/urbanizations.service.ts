import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { CommonResponse, Urbanizations } from 'src/app/core/models'
import { environment } from 'src/environments/environment';
import { pid } from 'process';

@Injectable({
  providedIn: 'root'
})
export class UrbanizationsService {
  constructor(public http: HttpClient) { }
  public url = environment.baseUrl;
  public api = environment.api.urbanizations;
  public listUrbanizations: Urbanizations[] = [];

  public getAll<T>(): Observable<CommonResponse<T>> {
    return this.http.get<CommonResponse<T>>(this.url+this.api.getAll)
    pipe(
      retry(2),
      map((data: CommonResponse<T>)=>{
        return data.result as T[];
      })
    )
  }




}
