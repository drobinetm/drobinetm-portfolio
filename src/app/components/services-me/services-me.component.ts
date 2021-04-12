import { Component, OnInit } from '@angular/core';
import {LoadJsonService} from '../../services/load-json/load-json.service';

@Component({
  selector: 'app-services-me',
  templateUrl: './services-me.component.html',
  styleUrls: ['./services-me.component.scss']
})
export class ServicesMeComponent implements OnInit {
  public services: any = undefined;

  constructor(private loadJson: LoadJsonService) {
    this.services = [];
   }

  ngOnInit(): void {
    this.loadJson.loadJSON('../../../assets/json/my-services.json').subscribe((json) => {
      this.services = json[0];
    });
  }
}
