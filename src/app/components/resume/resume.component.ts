import { Component, OnInit } from '@angular/core';
import {LoadJsonService} from '../../services/load-json/load-json.service';
import {Summary, SummaryData} from '../../models/summary';
import {Occupation} from '../../models/occupation';
import {Certification} from '../../models/certification';
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
  public certifications: Certification[] = undefined;
  public isLoading = true;

  constructor(private loadJson: LoadJsonService) {
    this.resume = this.initResume();
    this.summary = this.initSummary();
    this.occupations = this.initOccupation();
    this.certifications = this.initEducation();
  }

  ngOnInit(): void {
    this.loadJson.loadJSON('./assets/json/resume.json').subscribe((json) => {
      this.resume = json[0].general;
      this.summary = json[0].summary;
      this.occupations = json[0].occupation;
      this.certifications = json[0].certification;

      setTimeout(() => this.isLoading = false, 1000);
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

  protected initEducation(): Certification[] {
    return [];
  }
}
