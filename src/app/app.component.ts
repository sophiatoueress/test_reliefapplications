import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'reliefapplications-project';
  idUrl: string;
  
  converturl(url:string){
    if(url.includes("v=")){
      this.idUrl=url.split('v=')[1].split('&')[0];}
    else{
      this.idUrl=url.split('be/')[1].split('&')[0];}
    // this.idUrl='https://youtu.be/{{url}}'
    // this.idUrl = this.idUrl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    // var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    // var match = url.match(regExp);
    // this.idUrl = match

    // String pattern = "(?<=youtu.be/|watch\\?v=|/videos/|embed\\/)[^#\\&\\?]*";
    // Pattern compiledPattern = Pattern.compile(pattern);
    // Matcher matcher = compiledPattern.matcher(url);
    // if(matcher.find()){
    // this.idUrl = matcher.group();

    // var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    // var match = url.match(regExp);
    // this.idUrl = match[7];
    // }
  }
}