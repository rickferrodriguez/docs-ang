import { Component, effect, Inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ContentNoteComponent } from "./features/content-note/content-note";
import { API_TOKEN, ApiToken } from "./app.config";
import { UserData } from "./core/services/user-data";
import { ResUserData } from "./core/user.model";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

const apiToken: ApiToken = { url: "https://rickfer.com" };

@Component({
    selector: "app-root",
    imports: [
        RouterOutlet,
        ContentNoteComponent,
        AsyncPipe,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [{ provide: API_TOKEN, useValue: apiToken }],
    templateUrl: "./app.html",
    styleUrl: "./app.css",
})
export class AppComponent {
    apiUrl: ApiToken;
    randomData!: Observable<ResUserData>;
    favoriteColor = "";
    mascota = new FormControl("");

    constructor(
        @Inject(API_TOKEN) private api: ApiToken,
        private peopleData: UserData
    ) {
        this.apiUrl = this.api;
        console.log(this.apiUrl);
        effect(() => {
            this.randomData = this.peopleData.getHeroes();
        });
    }

    protected title = "notiki-ang richi flow";
    container = [
        { id: 0, title: "Explore the Docs", link: "https://angular.dev" },
        {
            id: 1,
            title: "Learn with Tutorials",
            link: "https://angular.dev/tutorials",
        },
    ];
}
