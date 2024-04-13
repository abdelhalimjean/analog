import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
"@angular/core";
import { Meta } from "@angular/platform-browser";
import { FooterComponent } from "./components/footer.component";
import { HeaderComponent } from "./components/header.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, RouterOutlet, HeaderComponent, FooterComponent],
	template: `
		<app-header />
		<router-outlet />
		<app-footer />
	`,
	styles: [
		`
			:host {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				min-height: 100vh;
				width: 100vw;
				overflow-x: hidden;
			}
		`,
	],
})
export class AppComponent implements OnInit {
  private meta: Meta = inject(Meta);

  ngOnInit(): void {
    this.meta.addTags([
      { name: "image", content: "/assets/angular-anguhashblog-dark.jpg" },
      { name: "description", content: "Analog Template for Hashnode Blogs" }
    ]);
  }

}
