import { Component, OnInit, Input } from '@angular/core';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {

@Input() id: string;

constructor(private bookmarkService: BookmarkService) {
}

addBookmark() {
  this.bookmarkService.setBookmarkService('https://www.youtube.com/watch?v='+this.id);
}

  ngOnInit(): void {
  }
}
