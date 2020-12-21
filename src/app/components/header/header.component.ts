import { Component, OnInit } from '@angular/core';
import { HeaderModel } from '../../interfaces/Header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  header: HeaderModel = {
    title: 'Abarrotes Cardona'
  }

  ngOnInit(): void {
    
  }

}
