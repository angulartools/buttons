import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'lib-save-button',
    templateUrl: './save-button.component.html',
    standalone: true,
    imports: [MatButton, TranslateModule]
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
