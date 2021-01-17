import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../common/entity.component';
import { HttpService } from '../server/http.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // articleList!: Observable<any>;
  @Input() articleList!: Article[];

  constructor(private httpService : HttpService) { 

  }

  ngOnInit(): void {

  }

  saveArticle(articleItem: any) {

    articleItem.favoriateSaved = !articleItem.favoriateSaved;

    this.httpService.saveArticle(articleItem.articleId, !articleItem.favoriateSaved).subscribe();;

  }

  articleClick(articleItem: any) {

    this.httpService.saveUsageTrack('Link', 'Article', articleItem.articleId);

    window.location.href = articleItem.articleUrl;

  }

}
