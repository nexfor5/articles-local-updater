import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

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
}
