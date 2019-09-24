import { Component } from '@angular/core';

@Component ({
    selector: 'app-root',
    template: `<h2>Hey there!</h2>`,
    styles: [
        `
        h2 {
            font-family: sans-serif;
            font-size: 1.2em;
        }
        `
    ]
})
export class AppComponent {

}