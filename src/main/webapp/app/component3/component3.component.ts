import { Component, OnInit } from '@angular/core';
import {WebService} from "../service/web.service";

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor(public webService: WebService) { }

  ngOnInit() {
    this.webService.postHttpServletResponse().subscribe();
    this.webService.takeTime().subscribe();
  }

}
