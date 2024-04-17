import {Observable} from "rxjs";
import {MissionModel} from "../models/mission-model";

export interface MissionGateway {
  getAllMission(): Observable<MissionModel[]>;
  postMission(mission: MissionModel): Observable<MissionModel>;
  deleteMission(id: number): Observable<any>;
  updateMission(mission: MissionModel, id: number): Observable<MissionModel>;
}
