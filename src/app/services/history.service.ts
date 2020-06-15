import { Injectable } from '@angular/core';

@Injectable() 
export class HistoryService {

history = [];

    getHistoryService(): string[]
    {
        var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        if(key.includes('history'))
        {
            archive.push( new Date(key.replace('history','')).toLocaleDateString() +' '+ new Date(key.replace('history','')).toLocaleTimeString() + '\n' + localStorage.getItem(key));
        }
    }

    return archive.sort().reverse();
    }

    setHistoryService(url:string): void
    {
        var keys = Object.keys(localStorage), i = 0, key, j = "0";
        for (; key = keys[i]; i++) {
            if(localStorage.getItem(key) == url && key.includes('history'))
            {
                j = key;
            }
        }
        if(j != "0")
        {
            localStorage.removeItem(j);
        }
        localStorage.setItem("history"+new Date().toString(), url);
        
    }
}