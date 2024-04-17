import {ImageModel} from "./image-model";

export interface PersonModel {
  idPerson: number,
  image: ImageModel,
  name: string,
  firstName: string,
  post: string
}
