import { Component, inject, signal } from "@angular/core";
import { NoteService } from "../../core/services/note";

@Component({
    selector: "[ app-content-note ]:not(button)",
    imports: [],
    templateUrl: "./content-note.html",
    styleUrl: "./content-note.css",
})
export class ContentNoteComponent {
    buttonName = signal("nombre??");
    inputValue = signal("");
    isValid = signal(false);
    // en teoría esto va en privado pero no entiendo porque
    private noteService = inject(NoteService);

    handleClick() {
        this.buttonName.set("Presionado y deshabilitado");
        this.isValid.set(true);
    }

    handleChange(e: any) {
        this.inputValue.set(e.target.value);
    }
}
