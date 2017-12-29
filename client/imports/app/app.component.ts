import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app.html'
})
export class AppComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams
            .filter(params => params.userId)
            .subscribe(params => {
                console.log(params); // {order: "popular"}
                if (params['userId']) {
                    console.log(params['userId']);
                } else {
                    console.log("We should do login here!");
                }
                // this.order = params.order;
                // console.log(this.order); // popular
            });
    }
}
