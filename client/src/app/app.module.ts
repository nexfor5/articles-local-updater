import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ArticleService} from 'src/services/article/article.service';
import {MomentModule} from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
