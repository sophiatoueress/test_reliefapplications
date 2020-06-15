import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VideoViewComponent } from './video-view/video-view.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            VideoViewComponent,
            SearchBarComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            YouTubePlayerModule,
            FormsModule,
            FontAwesomeModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map