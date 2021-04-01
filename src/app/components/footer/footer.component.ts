import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  name = 'Diovi Robinet Morales';
  description = 'I\'m a Full Stack Developer ';

  constructor() { }

  ngOnInit(): void {
  }

}
