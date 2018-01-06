import { Component, OnInit } from '@angular/core';
import { Images } from '../../../../imports/collections/images';

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


    onFileChange(e: any, name: string) {
        console.log(event);
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            // We upload only one file, in case
            // there was multiple files selected
            var file = e.currentTarget.files[0];
            if (file) {
                var uploadInstance = Images.insert({
                    file: file,
                    streams: 'dynamic',
                    chunkSize: 'dynamic'
                }, false);

                uploadInstance.on('end', function (error, fileObj) {
                    if (error) {
                        window.alert('Error during upload: ' + error.reason);
                    } else {
                        window.alert('File "' + fileObj.name + '" successfully uploaded');
                    }
                });

                uploadInstance.start();
            }
        }
    }
}
