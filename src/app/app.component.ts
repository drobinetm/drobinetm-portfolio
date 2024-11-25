import { Component, OnInit } from '@angular/core';
import {RenderUrlDemandService} from './services/render-url-demand/render-url-demand.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Diovi Robinet - Full Stack Developer';

  constructor(private renderExternal: RenderUrlDemandService) { }

  ngOnInit(): void {
    this.renderExternal.renderExternalScript('assets/js/main.js');
  }
}
