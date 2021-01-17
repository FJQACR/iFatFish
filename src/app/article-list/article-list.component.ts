import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../common/entity.component';
import { HttpService } from '../server/http.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  // articleList!: Observable<any>;
  articleList!: Article[];

  categoryId!: number;

  categoryTitle!: string;

  constructor(
    private httpService : HttpService,
    private routeInfo: ActivatedRoute,
    private titleService: Title) { 

  }

  ngOnInit(): void {

    this.categoryId = this.routeInfo.snapshot.queryParams['cagetoryId'];
    this.categoryTitle = this.routeInfo.snapshot.queryParams['categoryTitle'];
    this.titleService.setTitle(this.categoryTitle);
    this.httpService.getArticlesByCategoryId(this.categoryId).subscribe((data: any) => {
    this.articleList = data.articleList;

    });
  }

  saveArticle(articleItem: any) {

    articleItem.favoriateSaved = !articleItem.favoriateSaved;

    this.httpService.saveArticle(articleItem.articleId, !articleItem.favoriateSaved).subscribe();

  }


  articleClick(articleItem: any) {

    this.httpService.saveUsageTrack('Link', 'Article', articleItem.articleId);

    window.location.href = articleItem.articleUrl;

  }

}
