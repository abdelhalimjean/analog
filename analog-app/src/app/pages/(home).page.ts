import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	standalone: true,
	template: ` <p>To Load Posts here</p> `,
	styles: [
    `
    p {
      text-align: center;
    }
    `
  ],
})
export default class HomeComponent {}
