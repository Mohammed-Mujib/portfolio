import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, transition, style, animate, AnimationStyleMetadata, AnimationKeyframesSequenceMetadata, AnimationAnimateMetadata } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  styles: [
    `
      .box {
        width: 200px;
        height: 200px;
        background-color: #4caf50;
        margin-top: 10px;
      }
    `,
  ],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ContactComponent {
  contactlinks: any[] = [];
  private snaitizer = inject(DomSanitizer);
  constructor() {
    this.contactlinks = [
      {
        linkedin: this.snaitizer.bypassSecurityTrustUrl(
          'linkedin.com/in/mohammed-mujeeb-alrhman'
        ),
      },
      {
        github: this.snaitizer.bypassSecurityTrustUrl(
          'https://github.com/Mohammed-Mujib'
        ),
      },
      {
        telegram: this.snaitizer.bypassSecurityTrustUrl('t.me/Mohammed_Mujeeb'),
      },
      {
        email: this.snaitizer.bypassSecurityTrustUrl('wadmujib@gmail.com'),
      },
    ];
    // animate(500, style({ background: 'red' }));
  }
  visible = true;
  toggle() {
    this.visible = !this.visible;
  }
}
