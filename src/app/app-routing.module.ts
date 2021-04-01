import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutMeComponent} from './components/about-me/about-me.component';
import {ResumeComponent} from './components/resume/resume.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ContactComponent} from './components/contact/contact.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ServicesMeComponent} from './components/services-me/services-me.component';
import {PhotoContainerComponent} from './components/photo-container/photo-container.component';

const routes: Routes = [
  // { path: 'home', component: PhotoContainerComponent },
  // { path: 'about', component: AboutMeComponent },
  // { path: 'resume', component: ResumeComponent },
  // { path: 'services', component: ServicesMeComponent },
  // { path: 'portfolio', component: PortfolioComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
