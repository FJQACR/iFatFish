import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ArticleComponent } from './article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { HttpService } from './server/http.service';
import { ArticleListComponent } from './article-list/article-list.component';

const routeConfig: Routes = [
  {path:'', component: HomeComponent},
  {path:'articlesList', component: ArticleListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    CategoryComponent,
    ArticleComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(routeConfig)

  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
