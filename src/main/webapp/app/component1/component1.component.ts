import { Component, OnInit } from '@angular/core';
import {WebService} from "../service/web.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(public webService: WebService) { }

  ngOnInit() {
    this.webService.httpServletResponse().subscribe();
    this.webService.changeSize().subscribe();
  }

}
