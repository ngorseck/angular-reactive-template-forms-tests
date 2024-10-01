import { Injectable } from '@angular/core';
import {CrudService} from "../../../shared/services/http/crud.service";
import {Observable} from "rxjs";
import {DataResponse} from "../../../models/dataResponse";

@Injectable({
  providedIn: 'root'
})
export class ApiService extends CrudService{

  getObjects(): Observable<DataResponse[]> {

    return this.allObject<DataResponse[]>();
  }

  addObjects(dataRequest: any): Observable<any> {

    return this.saveObject<any, any>(dataRequest);
  }
}
