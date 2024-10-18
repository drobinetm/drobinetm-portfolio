import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotoContainerComponent } from './components/photo-container/photo-container.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackTopComponent } from './components/back-top/back-top.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServicesMeComponent } from './components/services-me/services-me.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        PhotoContainerComponent,
        AboutMeComponent,
        ResumeComponent,
        PortfolioComponent,
        ContactComponent,
        FooterComponent,
        BackTopComponent,
        PageNotFoundComponent,
        ServicesMeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
