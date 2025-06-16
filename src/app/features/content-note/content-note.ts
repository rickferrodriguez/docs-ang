import { Component, signal } from "@angular/core";
import { DataService } from "../../core/services/data";
import { Note } from "../../core/mocks/mock.notes";

@Component({
    selector: "[ app-content-note ]:not(button)",
    imports: [],
    templateUrl: "./content-note.html",
    styleUrl: "./content-note.css",
})
export class ContentNoteComponent {
    notes: Note[];

    constructor(private data: DataService) {
        this.notes = this.data.getNotes();
    }

    buttonName = signal("nombre??");
    inputValue = signal("");
    isValid = signal(false);

    changeStatusButton() {
        this.buttonName.set("Presionado y deshabilitado");
        this.isValid.set(true);
    }

    changeInputValue(e: any) {
        this.inputValue.set(e.target.value);
    }

    showKeypressed(e: KeyboardEvent) {
        console.log(e);
    }
}
