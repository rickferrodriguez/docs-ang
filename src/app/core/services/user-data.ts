import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ResUserData } from "../user.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class UserData {
    private http = inject(HttpClient);

    getHeroes(): Observable<ResUserData> {
        return this.http.get<ResUserData>("https://randomuser.me/api/");
    }
}
