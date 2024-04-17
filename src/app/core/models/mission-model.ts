import {PersonModel} from "./person-model";

export interface MissionModel {
  id: number,
  person: PersonModel,
  title: string,
  description: string,
  color: string,
  startDate: Date,
  endDate: Date
}
