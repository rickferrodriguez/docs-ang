import { Injectable } from "@angular/core";
import { NOTES } from "../mocks/mock.notes";

@Injectable({
    providedIn: "root",
})
export class NoteService {
    constructor() {}

    getHeroes() {
        return NOTES;
    }
}
