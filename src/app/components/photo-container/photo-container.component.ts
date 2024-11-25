import { Component, OnInit } from '@angular/core';
import {LoadJsonService} from '../../services/load-json/load-json.service';
import {Personal} from '../../models/personal';
import {Social} from '../../models/social';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.scss']
})
export class PhotoContainerComponent implements OnInit {
  public personal: Personal = undefined;
  public social: Social = undefined;
  public isLoading = true;

  constructor(private loadJson: LoadJsonService) {
    this.personal = this.initPersonal();
    this.social = this.initSocial();
  }

  ngOnInit(): void {
    this.loadJson.loadJSON('./assets/json/about-me.json').subscribe((json) => {
      this.personal = json[0].personal;
      this.social = json[0].social;

      setTimeout(() => this.isLoading = false, 1000);
    });
  }

  protected initPersonal(): Personal {
    return {name: '', website: '', phone: '', city: '', age: 0, degree: '', email: '', slogan: '', cvUrl: ''};
  }

  protected initSocial(): Social {
    return {github: '', linkedin: '', twitter: '', instagram: ''};
  }
}
