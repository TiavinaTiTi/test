import {InMemoryDbService} from "angular-in-memory-web-api";
import {MissionModel} from "../../core/models/mission-model";
export class MissionData implements InMemoryDbService{
  createDb():Record<string, MissionModel[]>{
    const missions: MissionModel[] =
    [
      {
        id: 2,
        person: {
          idPerson: 2,
          image: {
            id: 2,
            name: "avatar.png",
            type: "image/png",
            image: null
          },
          name: "Smith",
          firstName: "Alice",
          post: "UI/UX Designer"
        },
        title: "Projet ABC",
        description: "Conception d'une interface utilisateur",
        color: "#3366FF",
        startDate: new Date(),
        endDate: new Date()
      },
      {
        id: 1,
        person: {
          idPerson: 1,
          image: {
            id: 1,
            name: "profile_pic.jpg",
            type: "image/jpeg",
            image: null
          },
          name: "Doe",
          firstName: "John",
          post: "Software Developer"
        },
        title: "Projet XYZ",
        description: "Développement d'une nouvelle application",
        color: "#FF5733",
        startDate: new Date(),
        endDate: new Date()
      }
    ]

    return { missions }
  }

}
