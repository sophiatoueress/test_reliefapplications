import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

@Output() sendUrl = new EventEmitter<string>();
  url:string;

  searchHistory = [];

send() {
  this.sendUrl.emit(this.url);
}

  constructor(public bookmarkService: BookmarkService) {
  }

  ngOnInit(): void {
  }

}
