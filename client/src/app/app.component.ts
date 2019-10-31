import {Component, OnInit} from '@angular/core';
import {ArticleService} from 'src/services/article/article.service';
import {Article} from 'src/models/article';
import Swal from 'sweetalert2';

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

  async deleteArticle(article: Article) {
    try {
      const result = await Swal.fire({
        title: 'Do you want to delete it?',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.value) {
        this.loading = true;

        await this.articleService.delete(article);
        this.articles = await this.getData();

        this.loading = false;
        Swal.fire({
          title: 'Deleted!',
          text: 'The article has been deleted.',
          type: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }
    } catch {
      this.loading = false;
    }
  }

  async syncData() {
    try {
      this.loading = true;
      await this.articleService.put();
      this.articles = await this.getData();
      this.loading = false;
    } catch {
      this.loading = false;
    }
  }

  async openArticle(article: Article) {
    if (article.url) {
      window.open(article.url, '_blank');
    } else {
      await Swal.fire({
        title: 'No link',
        text: 'There is no link defined for this article',
        type: 'info',
        showCancelButton: false,
        confirmButtonText: 'Close'
      });
    }
  }
}
