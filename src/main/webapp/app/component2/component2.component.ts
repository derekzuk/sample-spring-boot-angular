import { Component, OnInit } from '@angular/core';
import {WebService} from "../service/web.service";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(public webService: WebService) { }

  ngOnInit() {
    this.webService.postHttpServletResponse().subscribe();
  }

}
