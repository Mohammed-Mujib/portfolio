import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  location:string = "Egypt - Giza";
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
}
