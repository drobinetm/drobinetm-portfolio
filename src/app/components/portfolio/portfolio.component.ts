import { Component, OnInit } from '@angular/core';
import {LoadJsonService} from '../../services/load-json/load-json.service';
import {Portfolio} from '../../models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public portfolio: Portfolio = undefined;

  constructor(private loadJson: LoadJsonService) {
    this.portfolio = this.initPortfolio();
  }

  ngOnInit(): void {
    this.loadJson.loadJSON('./assets/json/portfolio.json').subscribe((json) => {
      this.portfolio = json[0].general;
    });
  }

  protected initPortfolio(): Portfolio {
    return {
      description: ''
    };
  }
}
