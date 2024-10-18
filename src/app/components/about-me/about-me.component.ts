import {Component, OnInit} from '@angular/core';
import {LoadJsonService} from '../../services/load-json/load-json.service';
import {Personal} from '../../models/personal';
import {Skills} from '../../models/skills';
import {About} from '../../models/about';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public about: About = undefined;
  public personal: Personal = undefined;
  public skills: Skills[] = undefined;

  constructor(private loadJson: LoadJsonService) {
    this.about = this.initAbout();
    this.personal = this.initPersonal();
    this.skills = this.initSkills();
  }

  ngOnInit(): void {
      this.loadJson.loadJSON('./assets/json/about-me.json').subscribe((json) => {
        this.about = json[0].about;
        this.personal = json[0].personal;
        this.skills = json[0].skills;
      });
  }

  protected initAbout(): About {
    return {
      description: ''
    };
  }

  protected initPersonal(): Personal {
    return {name: '', website: '', phone: '', city: '', age: 0, degree: '', email: '', slogan: '', cvUrl: ''};
  }

  protected initSkills(): Skills[] {
    return [];
  }
}
