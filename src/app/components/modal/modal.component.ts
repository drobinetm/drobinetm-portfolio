import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForOf } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal',
  standalone: true,
    imports: [
        NgForOf,
        TranslatePipe
    ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  @Output() languageSelected = new EventEmitter<string>();

    languages: string[] = [];

    constructor(private translate: TranslateService) {}

    ngOnInit(): void {
      this.translate.get('buttons').subscribe((translations: any) => {
        this.languages = Object.keys(translations);
      });
    }

    selectLanguage(language: string): void {
      this.languageSelected.emit(language);
    }
}
