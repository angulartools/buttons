import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { TranslationPipe } from '@angulartoolsdr/translation';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-save-button',
  templateUrl: './save-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton, TranslationPipe]
})
export class SaveButton {

  label = input<string>('SALVAR');
  icone = input<string>('fa-regular fa-check');
  disabled = input<boolean>(false);

  onClickSave = output<Event>();

  clickButton(event: Event) {
    this.onClickSave.emit(event);
  }

}
