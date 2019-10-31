import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ArticleService} from 'src/services/article/article.service';
import {MomentModule} from 'ngx-moment';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MomentModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
