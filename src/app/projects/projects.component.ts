import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: any[] = [
    {
      name: 'Manga-hala',
      photo: '',
      skills: ['html', 'css', 'tailwindcss', 'php', 'laravel'],
      link: '',
    },
    {
      name: 'BudgetTracker',
      photo: '',
      skills: ['html', 'css', 'bootstrap', 'Angular', 'python', 'django'],
      link: '',
    },
    {
      name: 'Recipes-book',
      photo: '',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/Recipes-book/',
    },
    {
      name: 'Weather-API',
      photo: '',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/Weather-API/',
    },
    {
      name: 'envatoMarket',
      photo: '',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/envatoMarket/',
    },
    {
      name: 'Travela',
      photo: '',
      skills: ['html', 'css', 'bootstrap'],
      link: 'https://mohammed-mujib.github.io/Travela/',
    },
    {
      name: 'Interior Design',
      photo: '',
      skills: ['html', 'css', 'bootstrap'],
      link: 'https://mohammed-mujib.github.io//',
    },
    {
      name: 'Calculator',
      photo: '',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/Calculator/',
    },
    {
      name: 'Tic Tac Toe',
      photo: '',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/tic_tac_toe_game/',
    },
    {
      name: 'Currency-Converter ',
      photo: '',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/Currency-Converter/',
    },
  ];
}
