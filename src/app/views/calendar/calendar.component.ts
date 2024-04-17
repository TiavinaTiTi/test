import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MissionService} from "../../shared/services/mission.service";
import {MissionModel} from "../../core/models/mission-model";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  listMission: MissionModel[] = [];
  formsMission!: FormGroup;
  constructor(private fb: FormBuilder, private missionService: MissionService) { }

  ngOnInit(): void {
    this.intialFormsMission()
    this.getAll()
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),

    /*events: this.convertData(this.listMission).push({
      title: 'correction padding', start: '2024-04-16', end: '2024-04-17', backgroundColor: '#fff0000'
    }),*/
    events: [{
      title: 'ticket 101', start: '2024-04-17', end: '2024-04-17', backgroundColor: '#fff0000'
    }],
    eventMouseEnter: (info) => {
      const {jsEvent} = info;
      const {clientY, clientX} = jsEvent;

      let _position = `X: ${clientX}<br>Y: ${clientY}`;


      const infoElement = document.getElementById('info');
      if(infoElement){
        infoElement.innerHTML = _position;
        infoElement.style.top = clientY + "px";
        infoElement.style.left = (clientX + 20) + "px";
      }

    }
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  intialFormsMission(){
    this.formsMission = this.fb.group({
      id: [0],
      person: ['', Validators.required],
      title: ['', Validators.required],
      color: ['#ff0000', Validators.required],
      startDate: [new Date()],
      endDate: [new Date()],
      description: ['', Validators.required],
    })
  }

  onSumbit() {
    if(this.formsMission.valid){
      if(this.formsMission.value.id === 0 || this.formsMission.value.id === null){
        this.missionService.postMission(this.formsMission.value).subscribe({
          next: ()=>{
            this.getAll()
            this.formsMission.reset()
          },
          error: err => console.log(err)
        })
      }else {
        this.missionService.updateMission(this.formsMission.value, this.formsMission.value.id).subscribe({
          next: () =>{
            this.formsMission.reset()
          }
        })
      }
    }else {
      console.log('Formulaire invalide')
    }
  }

  getAll(){
    this.missionService.getAllMission().subscribe({
      next: value => {
        this.listMission = value
      },
      error: err => console.log('Error', err)
    })
  }

  convertData(list: MissionModel[]): {title: string, start: string, end: string, backgroundColor: string}[]{
    const arr: {title: string, start: string, end: string, backgroundColor: string}[] = [];
    for(let i = 0; i < list.length; i++){
      arr.push(
        {title: this.listMission[i].title, start: this.listMission[i].startDate.toDateString(), end: this.listMission[i].endDate.toDateString() , backgroundColor: this.listMission[i].color})
    }
    return arr;
  }
}
