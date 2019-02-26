import { Component } from '@angular/core';
import { WebService } from "./service/web.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the java agent test application';

  constructor(public webService: WebService) {}

  ngOnInit() {
  }

}
