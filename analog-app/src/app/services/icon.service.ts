import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID, inject } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class IconService {
  http: HttpClient = inject(HttpClient);
  private baseUrl!: string;

  private iconCache = new Map<string, string>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.baseUrl = isPlatformBrowser(this.platformId)
      ? window.location.origin
      : 'http://localhost:5173';
  }

  getIcon(key: string): Observable<string> {
    const path = `${this.baseUrl}/icons/${key.toLowerCase()}.svg`;

    if (this.iconCache.has(path)) {
      return of(this.iconCache.get(path) || '');
    }

    return this.http.get(path, { responseType: 'text' })
      .pipe(
        map(svgContent => {
          this.iconCache.set(path, svgContent);
          return svgContent;
        }),
        catchError(error => {
          console.error(`Error loading SVG file: ${error}`);
          return of('');
        })
      );
  }

}
