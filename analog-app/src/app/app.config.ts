import { ApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideFileRouter } from "@analogjs/router";
import { provideHttpClient, withFetch } from "@angular/common/http";

import { APOLLO_OPTIONS, Apollo } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { ApolloClientOptions, InMemoryCache } from "@apollo/client/core";

const uri = "https://gql.hashnode.com/"; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
	return {
		link: httpLink.create({ uri }),
		cache: new InMemoryCache(),
	};
}

export const appConfig: ApplicationConfig = {
	providers: [
		provideFileRouter(),
		provideClientHydration(),
		provideHttpClient(),
		provideHttpClient(withFetch()),
        {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
    Apollo
	],
};
