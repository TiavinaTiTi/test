import { Injectable } from '@angular/core';
import {MissionGateway} from "../../core/ports/mission-gateway";
import {Observable, tap} from "rxjs";
import {MissionModel} from "../../core/models/mission-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class MissionService implements MissionGateway{


  constructor(private http: HttpClient) { }

  getAllMission(): Observable<MissionModel[]> {
    return this.http.get<MissionModel[]>(environment.fake)
  }


  postMission(mission: MissionModel): Observable<MissionModel> {
    return this.http.post<MissionModel>(`${environment.fake}`, mission).pipe(
      tap(value => console.log('POST: '+ value))
    )
  }

  updateMission(mission: MissionModel, id: number): Observable<MissionModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'id': id.toString()
      })
    };
    return this.http.put<MissionModel>(`${environment.fake}`, mission, httpOptions);
  }

  deleteMission(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'id': id.toString()
      })
    };
    return this.http.delete(`${environment.fake}`, httpOptions);
  }

}
