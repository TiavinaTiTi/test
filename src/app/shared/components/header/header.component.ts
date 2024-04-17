import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus = [
    {'label': 'Accueil', 'icon': '', 'root': '/home'},
    {'label': 'Detail', 'icon': '', 'root': '/detail'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
