import { Component, output, input, ChangeDetectionStrategy } from '@angular/core';
import { TranslationPipe } from '@angulartoolsdr/translation';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-cancel-button',
  templateUrl: './cancel-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton, TranslationPipe]
})
export class CancelButton {

  cancelClick = output<void>();

  disabled = input<boolean>(false);

  cancelar() {
    this.cancelClick.emit();
  }

}