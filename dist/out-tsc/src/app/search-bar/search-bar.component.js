import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let SearchBarComponent = class SearchBarComponent {
    constructor() {
        this.sendUrl = new EventEmitter();
    }
    ngOnInit() { }
    send() {
        this.sendUrl.emit(this.url);
    }
};
__decorate([
    Output()
], SearchBarComponent.prototype, "sendUrl", void 0);
SearchBarComponent = __decorate([
    Component({
        selector: 'app-search-bar',
        templateUrl: './search-bar.component.html',
        styleUrls: ['./search-bar.component.scss']
    })
], SearchBarComponent);
export { SearchBarComponent };
//# sourceMappingURL=search-bar.component.js.map