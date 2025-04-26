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
      name: 'MangaHala',
      photo: 'assets/projects_screenshot/manga-halan.png',
      skills: ['HTML', 'CSS', 'tailwindcss','JavaScript', 'php', 'Laravel'],
      link: '',
    },
    {
      name: 'BudgetTracker',
      photo: 'assets/projects_screenshot/budget-traker.png',
      skills: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Typescript',
        'Angular',
        'Python',
        'Django',
      ],
      link: '',
    },
    {
      name: 'Recipes-book',
      photo: 'assets/projects_screenshot/recipes-book.png',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      link: 'https://mohammed-mujib.github.io/Recipes-book/',
    },
    {
      name: 'Interior Design',
      photo: 'assets/projects_screenshot/interior-design.png',
      skills: ['HTML', 'CSS', 'Bootstrap', 'Typescript', 'Angular'],
      link: 'https://mohammed-mujib.github.io/Interior-Design/showcase',
    },
    {
      name: 'Weather-API',
      photo: 'assets/projects_screenshot/weather-api.png',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      link: 'https://mohammed-mujib.github.io/Weather-API/',
    },
    {
      name: 'envatoMarket',
      photo: 'assets/projects_screenshot/evantoMarket.png',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      link: 'https://mohammed-mujib.github.io/envatoMarket/',
    },
    {
      name: 'Travela',
      photo: 'assets/projects_screenshot/travela.png',
      skills: ['HTML', 'CSS', 'Bootstrap'],
      link: 'https://mohammed-mujib.github.io/Travela/',
    },
    {
      name: 'Calculator',
      photo: 'assets/projects_screenshot/calculator.png',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      link: 'https://mohammed-mujib.github.io/Calculator/',
    },
    {
      name: 'Tic Tac Toe',
      photo: 'assets/projects_screenshot/tic_tac_toe.png',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      link: 'https://mohammed-mujib.github.io/tic_tac_toe_game/',
    },
    {
      name: 'Currency-Converter ',
      photo: 'assets/projects_screenshot/Currency-Converte.png',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      link: 'https://mohammed-mujib.github.io/Currency-Converter/',
    },
  ];
}
