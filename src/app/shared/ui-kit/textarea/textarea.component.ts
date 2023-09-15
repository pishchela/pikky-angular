import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  CdkTextareaAutosize,
  TextFieldModule,
} from '@angular/cdk/text-field';

const DEFAULT_TEXTAREA_MAX_LENGTH = 150;
const DEFAULT_TEXTAREA_MAX_ROWS = 2;

@Component({
  standalone: true,
  selector: 'pikky-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  imports: [
    FormsModule,
    TextFieldModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent implements ControlValueAccessor {

  @Input() public maxlength: number = DEFAULT_TEXTAREA_MAX_LENGTH;
  @Input() public maxRows: number = DEFAULT_TEXTAREA_MAX_ROWS;
  @Input() public placeholder: string;
  @Input() value: string;
  @Input() disabled: boolean = false;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  public writeValue(value: string): void {
    this.value = value;
    this.propagateChange(value);
  }

  public propagateChange: any = () => {};
  public propagateTouched: any = () => {};
  public registerOnChange(fn: (value: any) => void) {
    this.propagateChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
}
