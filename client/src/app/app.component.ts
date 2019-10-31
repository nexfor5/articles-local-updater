import {Component, OnInit} from '@angular/core';
import {ArticleService} from 'src/services/article/article.service';
import {Article} from 'src/models/article';
import 'moment/locale/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  articles: Article[];
  loading: boolean;
  calendarFormat: any;

  constructor(private articleService: ArticleService) {
    this.articles = [];
    this.loading = false;
    this.calendarFormat = {
      sameDay: 'h:mm a',
      lastDay: '[Yesterday]',
      lastWeek: 'MMM D',
      sameElse: 'MMM D'
    };
  }

  async ngOnInit() {
    try {
      this.loading = true;
      this.articles = await this.getData();
      this.loading = false;
    } catch {
      this.loading = false;
    }
  }

  async getData() {
    const articles = await this.articleService.get();
    return articles.map((article: any) => new Article(article));
  }
}
