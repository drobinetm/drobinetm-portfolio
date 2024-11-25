import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { NgIf } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    ModalComponent,
    NgIf
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  isModalOpen = false;

  constructor(private translate: TranslateService) {}

  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  handleLanguageSelected(language: string): void {
    this.translate.use(language);
    this.isModalOpen = false;
  }
}
