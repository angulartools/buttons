import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TranslationPipe } from '@angulartoolsdr/translation';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'lib-cancel-button',
    templateUrl: './cancel-button.html',
    imports: [MatButton, TranslationPipe]
})
export class CancelButton {


  @Output()
  cancelClick = new EventEmitter();

  @Input() disabled = false;

  constructor() { }

  cancelar() {
    this.cancelClick.emit();
  }

}
