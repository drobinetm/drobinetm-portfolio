import { Component, OnInit } from '@angular/core';
import {LoadJsonService} from '../../services/load-json/load-json.service';
import {Summary, SummaryData} from '../../models/summary';
import {Occupation} from '../../models/occupation';
import {Education} from '../../models/education';
import {Resume} from '../../models/resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public resume: Resume = undefined;
  public summary: Summary = undefined;
  public occupations: Occupation[] = undefined;
  public educations: Education[] = undefined;

  constructor(private loadJson: LoadJsonService) {
    this.resume = this.initResume();
    this.summary = this.initSummary();
    this.occupations = this.initOccupation();
    this.educations = this.initEducation();
  }

  ngOnInit(): void {
    this.loadJson.loadJSON('./assets/json/resume.json').subscribe((json) => {
      this.resume = json[0].general;
      this.summary = json[0].summary;
      this.occupations = json[0].occupation;
      this.educations = json[0].education;
    });
  }

  protected initSummary(): Summary {
    return {
      name: '',
      description: '',
      data: new SummaryData()
    };
  }

  protected initResume(): Resume {
    return {
      description: ''
    };
  }

  protected initOccupation(): Occupation[]{
    return [];
  }

  protected initEducation(): Education[] {
    return [];
  }
}
