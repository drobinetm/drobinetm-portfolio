import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.scss']
})
export class PhotoContainerComponent implements OnInit {
  name = 'Diovi Robinet Morales';
  description = 'I\'m a Full Stack Developer ';

  constructor() { }

  ngOnInit(): void {
  }

}
