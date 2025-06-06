import { Component, Inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ContentNoteComponent } from "./features/content-note/content-note";
import { API_TOKEN, ApiToken } from "./app.config";

const apiToken: ApiToken = { url: "https://rickfer.com" };

@Component({
    selector: "app-root",
    imports: [RouterOutlet, ContentNoteComponent],
    providers: [{ provide: API_TOKEN, useValue: apiToken }],
    templateUrl: "./app.html",
    styleUrl: "./app.css",
})
export class AppComponent {
    apiUrl: ApiToken;
    constructor(@Inject(API_TOKEN) private api: ApiToken) {
        this.apiUrl = this.api;
        console.log(this.apiUrl);
    }

    protected title = "notiki-ang richi flow";
    container = [
        { id: 0, title: "Explore the Docs", link: "https://angular.dev" },
        {
            id: 1,
            title: "Learn with Tutorials",
            link: "https://angular.dev/tutorials",
        },
        { id: 2, title: "CLI Docs", link: "https://angular.dev/tools/cli" },
        {
            id: 3,
            title: "Angular Language Service",
            link: "https://angular.dev/tools/language-service",
        },
        {
            id: 4,
            title: "Angular DevTools",
            link: "https://angular.dev/tools/devtools",
        },
    ];
}
