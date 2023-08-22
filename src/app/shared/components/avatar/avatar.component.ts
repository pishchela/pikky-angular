import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'pikky-avatar',
  template: `<img src="assets/images/user-images/user-{{avatarId}}.svg" alt="user">`,
  styles: [
    `
      :host {
        max-height: 100%;
        max-width: 100%;
        img {
          max-height: 100%;
          max-width: 100%;
        }
      }
    `,
  ]
})
export class AvatarComponent {
  @Input() avatarId: number = 1;
}
