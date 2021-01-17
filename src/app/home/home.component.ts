import { Component, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { Article, Carousel, Category } from '../common/entity.component';
import { HttpService } from '../server/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private httpService: HttpService) { }

  bannerList!: Carousel[];
  articleList!: Article[];
  categoryList!: Category[];
  // bannerList: Arra y<Carousel> = []

  ngOnInit() {
    
    this.titleService.setTitle('养殖快讯');
    this.httpService.initHomePage().subscribe((data: any) => {

      this.bannerList = data.bannerList;
      this.articleList = data.articleList;
      this.categoryList = data.categoryList;

    });

  }

}
