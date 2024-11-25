import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Skills } from '../../models/skills';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
    public skills: Skills[] = undefined;
    public cvUrl: string = undefined;

    constructor(private translate: TranslateService) { }

    ngOnInit(): void {
        this.translate.get(['skills', 'personal']).subscribe((translations: any) => {
            this.skills = translations.skills;
            this.cvUrl = translations.personal.cvUrl;
        });
    }
}
