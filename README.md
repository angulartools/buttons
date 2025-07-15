# @angulartoolsdr/buttons

[![npm version](https://badge.fury.io/js/%40angulartoolsdr%2Fbuttons.svg)](https://badge.fury.io/js/%40angulartoolsdr%2Fbuttons)

This library provides a collection of reusable button components for Angular applications, designed to streamline development and ensure UI consistency.

## Components

- **Save Button (`lib-save-button`):** A standardized save button.
- **Cancel Button (`lib-cancel-button`):** A standardized cancel button.

## Prerequisites

This library has peer dependencies on Angular and Angular Material, as well as `@angulartoolsdr/translation`. Make sure these are installed in your project.

```bash
npm install @angular/common@^20.0.0 @angular/core@^20.0.0 @angular/material@^18.0.0 @angulartoolsdr/translation@^20.0.0
```

## Installation

To install this library, run:

```bash
npm install @angulartoolsdr/buttons
```

## Usage

Import the `SaveButtonComponent` and `CancelButtonComponent` into your component or module where you intend to use them.

```typescript
import { Component } from '@angular/core';
import { SaveButtonComponent } from '@angulartoolsdr/buttons';
import { CancelButtonComponent } from '@angulartoolsdr/buttons';

@Component({
  selector: 'app-example',
  template: `
    <lib-save-button 
      [label]="'Salvar Alterações'" 
      [icone]="'fa-solid fa-floppy-disk'"
      (onClickSave)="onSave()"
      [disabled]="isSaving">
    </lib-save-button>

    <lib-cancel-button 
      (cancelClick)="onCancel()"
      [disabled]="isSaving">
    </lib-cancel-button>
  `,
  standalone: true,
  imports: [SaveButtonComponent, CancelButtonComponent]
})
export class ExampleComponent {
  isSaving = false;

  onSave() {
    console.log('Save clicked');
    this.isSaving = true;
    // Simulate a save operation
    setTimeout(() => {
      this.isSaving = false;
    }, 2000);
  }

  onCancel() {
    console.log('Cancel clicked');
  }
}
```

## API Reference

### SaveButtonComponent

**Selector:** `lib-save-button`

| Name          | Type       | Default          | Description                                   |
|---------------|------------|------------------|-----------------------------------------------|
| **@Input()**  |            |                  |                                               |
| `label`       | `string`   | `'SALVAR'`       | The text to display on the button.            |
| `icone`       | `string`   | `'fa-regular fa-check'` | The CSS class for the button's icon (e.g., from Font Awesome). |
| `disabled`    | `boolean`  | `false`          | Whether the button is disabled.               |
| **@Output()** |            |                  |                                               |
| `onClickSave` | `EventEmitter<any>` | -       | Emits an event when the button is clicked.    |

### CancelButtonComponent

**Selector:** `lib-cancel-button`

| Name          | Type       | Default | Description                                   |
|---------------|------------|---------|-----------------------------------------------|
| **@Input()**  |            |         |                                               |
| `disabled`    | `boolean`  | `false` | Whether the button is disabled.               |
| **@Output()** |            |         |                                               |
| `cancelClick` | `EventEmitter<void>` | -     | Emits an event when the button is clicked.    |

## License

[MIT](LICENSE)