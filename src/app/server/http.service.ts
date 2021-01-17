import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) {
   }


  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  postData_http(url: string, body: any): Observable<object> {

    return this.httpClient.post(url, body, this.httpOptions);
  }

  saveArticle(articleId: number, favoriateSaved: boolean) : any {

    var api = "/api/home/saveFavoriteByArticleId";

    return this.postData_http(api, { articleId: articleId, favoriateSaved: favoriateSaved, openId: '123'});

  }

  saveUsageTrack(wechatEvent: string, module: string, id: number) : any {

    var api = "/api/home/saveWechatTrack";

    return this.postData_http(api, { wechatEvent: wechatEvent, module: module.toString(), detailId: id.toString(), openId: '123' });

  }

  initHomePage(): any {

    var api = "/api/home/initHomePage";

    return this.postData_http(api, { openId: '123' });
  }

  getArticlesByCategoryId(categoryID: number) : any {

    var api = "/api/home/getArticlesByCategoryID";

    return this.postData_http(api, { categoryId: categoryID.toString() });

  }

}
