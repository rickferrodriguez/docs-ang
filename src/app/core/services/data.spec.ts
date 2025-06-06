import { TestBed } from "@angular/core/testing";

import { Note } from "./data";

describe("Note", () => {
    let service: Note;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Note);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
