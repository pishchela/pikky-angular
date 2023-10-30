import {
  ChangeDetectionStrategy,
  Component, OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'pikky-create-room',
  templateUrl: './create-room.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class CreateRoomComponent implements OnInit{
  public formGroup!: FormGroup;


  constructor(
    private _fb: FormBuilder,
    private _router: Router,
  ) {
  }

  public createRoom(): void {
    this._router.navigate([this.roomName.value],
      {
        queryParams: {
          username: this.userName.value,
        },
      })
  }

  public ngOnInit(): void {
    this.formGroup = this._fb.group({
      roomName: [''],
      userName: [''],
    });
  }

  public get roomName(): FormControl {
    return this.formGroup.get('roomName') as FormControl;
  }

  public get userName(): FormControl {
    return this.formGroup.get('userName') as FormControl;
  }
}
