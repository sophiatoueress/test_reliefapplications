import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
}) 
export class SearchBarComponent implements OnInit {
  
  @Output() sendUrl = new EventEmitter<string>();
  url:string;

  searchHistory = [];

  constructor(private historyService: HistoryService) {
  }

  ngOnInit(): void {}

  send() {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = this.url.match(regExp);
    if(match){
        this.sendUrl.emit(this.url);
        this.historyService.setHistoryService(this.url);
    }
    else{
    alert("incorrect url format")
    }
  }
    
}
