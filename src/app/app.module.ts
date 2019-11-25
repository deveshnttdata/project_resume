import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { HomeHeaderComponent } from './home-header/home-header/home-header.component';
import { HomeIntroComponent } from './home-intro/home-intro/home-intro.component';
import { HomeCodeShopComponent } from './home-code-shop/home-code-shop/home-code-shop.component';
import { HomeProjectsComponent } from './home-projects/home-projects/home-projects.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { HomeHireMeComponent } from './home-hire-me/home-hire-me.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomePostsComponent } from './home-posts/home-posts.component';
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
