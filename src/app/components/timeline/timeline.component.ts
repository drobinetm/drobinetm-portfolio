import { Component, Input } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() timelineItems: {
    title: string;
    date: string;
    place: string;
    customClass?: string;
    url?: string;
    data?: string;
  }[] = [];
}
