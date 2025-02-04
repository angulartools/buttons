import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslationPipe } from '@angulartoolsdr/translation';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'lib-save-button',
    templateUrl: './save-button.component.html',
    imports: [MatButton, TranslationPipe]
})
export class SaveButtonComponent {

  @Input() label = 'SALVAR';
  @Input() icone = 'fa-regular fa-check';
  @Input() disabled = false;

  @Output() onClickSave: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  clickButton(event) {
    this.onClickSave.emit(event);
  }

}
