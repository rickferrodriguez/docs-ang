import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ContentNoteComponent } from "./features/content-note/content-note";

@Component({
    selector: "app-root",
    imports: [RouterOutlet, ContentNoteComponent],
    templateUrl: "./app.html",
    styleUrl: "./app.css",
})
export class AppComponent {
    protected title = "notiki-ang richi flow";
    container = [
        { title: "Explore the Docs", link: "https://angular.dev" },
        {
            title: "Learn with Tutorials",
            link: "https://angular.dev/tutorials",
        },
        { title: "CLI Docs", link: "https://angular.dev/tools/cli" },
        {
            title: "Angular Language Service",
            link: "https://angular.dev/tools/language-service",
        },
        {
            title: "Angular DevTools",
            link: "https://angular.dev/tools/devtools",
        },
    ];
}
