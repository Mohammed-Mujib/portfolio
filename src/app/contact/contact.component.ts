import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactlinks:any[] =[];
  private snaitizer = inject (DomSanitizer);
  constructor(){
    this.contactlinks = [
      {
        linkedin: this.snaitizer.bypassSecurityTrustUrl('linkedin.com/in/mohammed-mujeeb-alrhman'),
      },
      {
        github: this.snaitizer.bypassSecurityTrustUrl('https://github.com/Mohammed-Mujib'),
      },
      {
        telegram: this.snaitizer.bypassSecurityTrustUrl('t.me/Mohammed_Mujeeb'),
      },
      {
        email: this.snaitizer.bypassSecurityTrustUrl('wadmujib@gmail.com'),
      },
    ];
  }
}
