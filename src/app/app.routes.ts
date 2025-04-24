import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path:"",redirectTo:"info",pathMatch:"full"},
  {path:"info",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"**",component:NotFoundComponent}
];
