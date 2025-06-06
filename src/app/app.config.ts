import {
    ApplicationConfig,
    InjectionToken,
    provideBrowserGlobalErrorListeners,
    provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
    provideClientHydration,
    withEventReplay,
} from "@angular/platform-browser";

export interface ApiToken {
    url: string;
}

export const API_TOKEN = new InjectionToken<ApiToken>("url api token");

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
    ],
};
