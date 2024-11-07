import { Component, OnInit } from '@angular/core';
import {LoadJsonService} from '../../services/load-json/load-json.service';
import {Service} from '../../models/service';

@Component({
  selector: 'app-services-me',
  templateUrl: './services-me.component.html',
  styleUrls: ['./services-me.component.scss']
})
export class ServicesMeComponent implements OnInit {
  public services: Service = undefined;
  public isLoading = true;

  constructor(private loadJson: LoadJsonService) {
    this.services = this.initServices();
  }

  ngOnInit(): void {
    this.loadJson.loadJSON('./assets/json/my-services.json').subscribe((json) => {
      this.services = json[0];

      setTimeout(() => this.isLoading = false, 1000);
    });
  }

  protected initServices(): Service {
    return {
      description: '',
      backend: '',
      devops: '',
      frontend: ''
    };
  }
}
