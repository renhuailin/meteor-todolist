import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bao-dan',
    templateUrl: './bao-dan.component.html',
    styleUrls: ['./bao-dan.component.css']
})
export class BaoDanComponent implements OnInit {
    diyaTypes = ["一抵", "二抵"];
    constructor() { }

    ngOnInit() {
    }

}
