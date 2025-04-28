import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

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
    trigger('shows', [
      state(
        'hidden',
        style({
          opacity: 0,
          position: 'relative',
          transform: 'translateX(-40%)',
        })
      ),
      state('visible', style({ opacity: 1, transform: 'translateX(0%)' })),
      transition('hidden <=> visible', animate('300ms ease-out')),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  visible = false;
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


  }

  // linksVisable = false

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true;
    }, 200);
  }
}
