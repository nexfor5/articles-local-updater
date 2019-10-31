import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Article} from 'src/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  resource: string;

  constructor(private http: HttpClient) {
    this.resource = 'articles';
  }

  get(): Promise<any> {
    return this.http.get(environment.apiBaseUrl + this.resource).toPromise();
  }

  put(): Promise<any> {
    return this.http.put(environment.apiBaseUrl + this.resource, {}).toPromise();
  }

  delete(article: Article): Promise<any> {
    const params = {
      articleId: article.articleId
    };
    return this.http.delete(environment.apiBaseUrl + this.resource, {params}).toPromise();
  }
}
