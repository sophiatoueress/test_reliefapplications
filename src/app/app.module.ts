import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { VideoViewComponent } from './video-view/video-view.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HistoryComponent } from './history/history.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

import { HistoryService } from "./services/history.service";
import { BookmarkService } from "./services/bookmark.service";


@NgModule({
  declarations: [
    AppComponent,
    VideoViewComponent,
    SearchBarComponent,
    HistoryComponent,
    BookmarkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FormsModule,    
  ],
  providers: [
    HistoryService,
    BookmarkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
