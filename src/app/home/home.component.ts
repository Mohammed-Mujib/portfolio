import { CommonModule } from '@angular/common';
import { AfterContentInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { match } from 'assert';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterContentInit {
  location: string = 'Egypt - Giza';
  jobTitels: string[] = ['Front-end developer', 'Back-end developer'];
  jobtitle: string = 'Full stack developer';
  skills: { name: string; icon: string }[] = [
    { name: 'HTML5', icon: 'assets/icon_images/Html5.svg' },
    { name: 'CSS3', icon: 'assets/icon_images/CSS3.svg' },
    { name: 'SASS', icon: 'assets/icon_images/sass.svg' },
    { name: 'Bootstrap', icon: 'assets/icon_images/bootstrap-logo.svg' },
    { name: 'Tailwindcss', icon: 'assets/icon_images/tailwindcss.svg' },
    { name: 'JavaScript', icon: 'assets/icon_images/javascript.svg' },
    { name: 'TypeScript', icon: 'assets/icon_images/Typescript.png' },
    { name: 'Angular', icon: 'assets/icon_images/angular_gradient.png' },
    { name: 'PHP', icon: 'assets/icon_images/php.png' },
    { name: 'Laravel', icon: 'assets/icon_images/laravel-logo.svg' },
    { name: 'Python', icon: 'assets/icon_images/python.svg' },
    { name: 'Django', icon: 'assets/icon_images/django.png' },
    { name: 'Database', icon: 'assets/icon_images/database.svg' },
  ];
  myName: string = 'Mohammed Mujeeb';
  conName: string = 'Mohammed Mujeeb';
  simples: string = 'qazwsxedcrfvtgbyhnujmikolp';
  isTuchName: boolean = false;
  isTuchJobTitle: boolean = false;

  lettersFlow() {
    let count: number = 1;
    if (!this.isTuchName) {
      this.isTuchName = true;
      for (let i = this.conName.length - 1; i >= 0; i--) {
        setTimeout(() => {
          this.myName =
            this.conName.slice(0, count) + this.randomLetters(i - 1);
          count++;
        }, (this.conName.length - i) * 80);
      }

      setTimeout(() => {
        this.myName = this.conName;
        count = 1;
        this.isTuchName = false;
      }, this.conName.length * 80);
    }
  }

  randomLetters(num: number): string {
    let text = '';
    for (let j = 0; j < num; j++) {
      text += this.simples[Math.floor(Math.random() * this.simples.length)];
    }
    return text;
  }

  jobSwap() {
    if (!this.isTuchJobTitle) {
      this.isTuchJobTitle = true;
      let index = 0;

      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          this.jobtitle = this.jobTitels[index];
          index = index === 0 ? 1 : 0; // toggle between 0 and 1
          // console.log(this.jobtitle);
        }, i * 500);
      }

      setTimeout(() => {
        // console.log('ready--------------------------');
        this.jobtitle = 'Full stack developer';
        this.isTuchJobTitle = false;
      }, 6 * 500);
    }
  }

  ngAfterContentInit(): void {}
}
