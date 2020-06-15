import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

@Output() sendUrl = new EventEmitter<string>();
  url:string;

  searchHistory = [];

send() {
  this.sendUrl.emit(this.url);
}

  constructor(public historyService: HistoryService) {
  }

  ngOnInit(): void {
  }

}
