import { Injectable } from '@angular/core';

@Injectable() 
export class BookmarkService {

bookmark = [];

    getBookmarkService(): string[]
    {
        var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        if(key.includes('bookmark'))
        {
            archive.push(localStorage.getItem(key));
        }
    }

    return archive.sort().reverse();
    }

    setBookmarkService(url:string): void
    {
        var keys = Object.keys(localStorage), i = 0, key, j = "0";
        for (; key = keys[i]; i++) {
            if(localStorage.getItem(key) == url && key.includes('bookmark'))
            {
                j = key;
            }
        }
        if(j != "0")
        {
            localStorage.removeItem(j);
        }
        localStorage.setItem("bookmark"+new Date().toString(), url);
        
    }
}