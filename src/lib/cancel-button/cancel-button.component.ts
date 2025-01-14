import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'lib-cancel-button',
    templateUrl: './cancel-button.component.html',
    imports: [MatButton, TranslateModule]
})
export class CancelButtonComponent {


  @Output()
  cancelClick = new EventEmitter();

  @Input() disabled = false;

  constructor() { }

  cancelar() {
    this.cancelClick.emit();
  }

}
