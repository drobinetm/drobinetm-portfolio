import { Component, OnInit } from '@angular/core';
import {LoadJsonService} from "../../services/load-json/load-json.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public resume = undefined;
  public summary = undefined;
  public occupations = undefined;
  public educations = undefined;

  constructor(private loadJson: LoadJsonService) {
    this.resume = this.initResume();
    this.summary = this.initSummary();
    this.occupations = this.initOccupation();
    this.educations = this.initEducation();
  }

  ngOnInit(): void {
    this.loadJson.loadJSON('../../../assets/json/resume.json').subscribe((json) => {
      this.resume = json[0].resume;
      this.summary = json[0].summary;
      this.occupations = json[0].occupation;
      this.educations = json[0].education;
    });
  }

  protected initSummary() {
    return {};
  }

  protected initResume() {
    return {};
  }

  protected initOccupation() {
    return [];
  }

  protected initEducation() {
    return [];
  }
}
