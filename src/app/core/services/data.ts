import { Injectable } from "@angular/core";
import { NOTES } from "../mocks/mock.notes";

@Injectable({
    providedIn: "root",
})
export class DataService {
    constructor() {}

    getNotes() {
        return NOTES;
    }
}
