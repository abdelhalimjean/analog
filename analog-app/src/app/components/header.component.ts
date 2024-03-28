import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterLink],
	template: `
		<div class="toolbar" role="banner">
			<div class="toolbar-row first">
				<div class="toolbar-row-start">
					<a routerLink="/" class="blog-title">
						<img
							class="logo-image"
							src="/images/anguhashblog-logo-purple-bgr.jpg"
							alt="logo"
						/>
					</a>
					<a routerLink="/" class="blog-title">
						<h1>AnguHashBlog</h1>
					</a>
				</div>
				<div class="toolbar-row-end">
					<div class="controls">
						<div class="search">
							<button>
								<span class="material-symbols-outlined"> search </span>
							</button>
						</div>
						<div class="settings">
							<button>
								<span class="material-symbols-outlined"> settings </span>
							</button>
						</div>
						<div class="theme-control"></div>
					</div>
				</div>
			</div>
			<div class="toolbar-row second">
				<div class="toolbar-row-start">
					<div class="social">
						<div class="social-link"></div>
					</div>
				</div>
				<div class="toolbar-row-end">
					<div class="follow">
						<button>Follow</button>
					</div>
				</div>
			</div>
			<div class="toolbar-row third">
				<div class="series">
					@for (series of seriesList; track series) {
					<a [routerLink]="['series', series.slug]" class="series-link">{{
						series.name
					}}</a>
					}
				</div>
			</div>
		</div>
	`,
	styles: [
		`
			.toolbar {
				background-color: #1f1f1f;
				position: relative;
				padding: 1rem;
				z-index: 3;
			}

			.toolbar-row {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.toolbar-row.second {
        padding: 0.5rem 0;
				border-bottom: 1px solid #80808050;
			}

			.toolbar-row .toolbar-row-start {
				display: flex;
			}

			.toolbar-row-start .logo-image {
				width: 3rem;
				height: 3rem;
				margin-right: 0.5rem;
				border-radius: 50%;
			}

			.toolbar-row-start .menu {
				display: flex;
				align-items: center;
				margin-right: 0.7rem;
				cursor: pointer;
			}

			.toolbar-row-start .blog-title {
				display: flex;
				align-items: center;
				cursor: pointer;
			}

			.toolbar-row-start .blog-title h1 {
				font-size: 1.3rem;
				font-weight: 400;
				margin: 0;
			}

			.social {
				display: flex;
				align-items: flex-start;
				justify-content: center;
				margin: 0.8rem 0 0.5rem;
			}

			.controls {
				display: flex;
				gap: 0.3rem;
			}

			.controls span {
				font-size: 1.4rem;
			}

			.theme-control {
				display: flex;
				align-items: center;
			}

			.follow button {
				font-size: 1.1rem;
				padding: 0.3rem 1.1rem;
				border-radius: 2rem;
			}

			.series {
				display: flex;
				justify-content: center;
				width: 100%;
				padding: 0.7rem 0 0;
			}

      .series-link {
        font-size: 1.1rem;
        text-transform: uppercase;
        margin: 0 0.4rem;
      }
		`,
	],
})
export class HeaderComponent {
	seriesList = [
		{ name: "Angular", slug: "angular" },
		{ name: "React", slug: "react" },
		{ name: "Vue", slug: "vue" },
	];
}
