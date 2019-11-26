import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './root/navbar/navbar.component';
import { HomeHeaderComponent } from './root/home-header/home-header.component';
import { HomeIntroComponent } from './root/home-intro/home-intro.component';
import { HomeCodeShopComponent } from './root/home-code-shop/home-code-shop.component';
import { HomeProjectsComponent } from './root/home-projects/home-projects.component';
import { HomeVideoComponent } from './root/home-video/home-video.component';
import { HomeHireMeComponent } from './root/home-hire-me/home-hire-me.component';
import { HomeAboutComponent } from './root/home-about/home-about.component';
import { HomePostsComponent } from './root/home-posts/home-posts.component';
import { FooterComponent } from './root/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeHeaderComponent,
    HomeIntroComponent,
    HomeCodeShopComponent,
    HomeProjectsComponent,
    HomeVideoComponent,
    HomeHireMeComponent,
    HomeAboutComponent,
    HomePostsComponent,
    FooterComponent,
    ResumeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
