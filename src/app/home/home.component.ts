import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { match } from 'assert';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
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
  isTouchName: boolean = false;
  isTouchJobTitle: boolean = false;
  isTouchImg: boolean = false;
  degrees: number = 0;
  progressInterval: any = null;
  imgPopup: boolean = false;
  popupText: string = '';
  education: boolean = true;
  section_page: string = "education";

  educationList: any = [
    {
      school: 'sudan international univercity ',
      degree: ' Bachelor of Business Computing',
    },
    { school: 'MEC Academy ', degree: 'Front End Diploma' },
    { school: 'MEC Academy ', degree: 'Back End Diploma' },
  ];
  experianceList: any = [
    { place: ' SUSCloud', position: 'Front end developer' },
  ];

  lettersFlow() {
    let count: number = 1;
    if (!this.isTouchName) {
      this.isTouchName = true;
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
        this.isTouchName = false;
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
    if (!this.isTouchJobTitle) {
      this.isTouchJobTitle = true;
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
        this.isTouchJobTitle = false;
      }, 6 * 500);
    }
  }

  // Activate when mouse hover
  progressBarForward() {
    if (!this.isTouchImg) {
      this.isTouchImg = true;
      this.clearProgress(); // Clear any existing intervals

      this.progressInterval = setInterval(() => {
        if (this.degrees >= 360) {
          this.clearProgress();
          this.activePopup();
        } else {
          this.degrees += 3;
        }
      }, 10);
    }
  }

  // Activate when mouse leave
  progressBarBackward() {
    if (this.isTouchImg) {
      this.isTouchImg = false;
      this.clearProgress(); // Clear any existing intervals
      this.deactivePopup();
      this.progressInterval = setInterval(() => {
        if (this.degrees <= 0) {
          this.clearProgress();
        } else {
          this.degrees -= 3;
        }
      }, 10);
    }
  }

  // Helper function to clear interval
  clearProgress() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  activePopup() {
    this.imgPopup = true;
    this.popupText = '80% Human';
    setTimeout(() => {
      this.popupText = '20% Machine';
    }, 1100);
    setTimeout(() => {
      this.popupText = 'Just the creativity and technology needed for the job';
    }, 2200);
  }

  deactivePopup() {
    this.imgPopup = false;
    this.popupText = '';
  }

  // educationActive() {
  //   !this.education ? (this.education = !this.education) : '';
  // }

  // experianceActive() {
  //   this.education ? (this.education = !this.education) : '';
  // }

  toggleSection(section: 'education' | 'experience') {
    this.section_page = section;
  }

  ngAfterViewInit(): void {
    this.lettersFlow();
  }
}
