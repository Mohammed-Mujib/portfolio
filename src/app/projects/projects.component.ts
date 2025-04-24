import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: any[] = [
    {
      name: 'Manga-hala',
      photo: 'assets/projects_screenshot/manga-halan.png',
      skills: ['html', 'css', 'tailwindcss', 'php', 'laravel'],
      link: '',
    },
    {
      name: 'BudgetTracker',
      photo: 'assets/projects_screenshot/budget-traker.png',
      skills: [
        'html',
        'css',
        'bootstrap',
        'Typescript',
        'Angular',
        'python',
        'django',
      ],
      link: '',
    },
    {
      name: 'Recipes-book',
      photo: 'assets/projects_screenshot/recipes-book.png',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/Recipes-book/',
    },
    {
      name: 'Interior Design',
      photo: 'assets/projects_screenshot/interior-design.png',
      skills: ['html', 'css', 'bootstrap', 'Typescript', 'Angular'],
      link: 'https://mohammed-mujib.github.io/Interior-Design/showcase',
    },
    {
      name: 'Weather-API',
      photo: 'assets/projects_screenshot/weather-api.png',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/Weather-API/',
    },
    {
      name: 'envatoMarket',
      photo: 'assets/projects_screenshot/evantoMarket.png',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/envatoMarket/',
    },
    {
      name: 'Travela',
      photo: 'assets/projects_screenshot/travela.png',
      skills: ['html', 'css', 'bootstrap'],
      link: 'https://mohammed-mujib.github.io/Travela/',
    },
    {
      name: 'Calculator',
      photo: 'assets/projects_screenshot/calculator.png',
      skills: ['html', 'css', 'bootstrap', 'javaScript'],
      link: 'https://mohammed-mujib.github.io/Calculator/',
    },
    {
      name: 'Tic Tac Toe',
      photo: 'assets/projects_screenshot/tic_tac_toe.png',
      skills: ['html', 'css', 'bootstrap', 'JavaScript'],
      link: 'https://mohammed-mujib.github.io/tic_tac_toe_game/',
    },
    {
      name: 'Currency-Converter ',
      photo: 'assets/projects_screenshot/Currency-Converte.png',
      skills: ['html', 'css', 'bootstrap', 'JavaScript'],
      link: 'https://mohammed-mujib.github.io/Currency-Converter/',
    },
  ];
}
