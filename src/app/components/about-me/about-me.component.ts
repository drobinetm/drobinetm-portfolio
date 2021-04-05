import {Component, OnInit} from '@angular/core';
import {LoadJsonService} from '../../services/load-json/load-json.service';
import {Personal} from "../../models/personal";
import {Skills} from "../../models/skills";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public personal: Personal = undefined;
  public general: Skills[] = undefined;
  public skills: any = undefined;

  constructor(private loadJson: LoadJsonService) {
    this.personal = this.initPersonal();
    this.skills = this.initSkills();
  }

  ngOnInit(): void {
      this.loadJson.loadJSON('../../../assets/json/about-me.json').subscribe((json) => {
        this.personal = json[0].personal;
        this.skills = json[0].skills;
      });
  }

  protected initPersonal(): Personal {
    return {name: '', website: '', phone: '', city: '', age: 0, degree: '', email: ''};
  }

  protected initSkills(): Skills[] {
    return [];
  }
}
