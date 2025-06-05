import { Component } from "@angular/core";

@Component({
    selector: "app-content-note",
    imports: [],
    templateUrl: "./content-note.html",
    styleUrl: "./content-note.css",
})
export class ContentNoteComponent {
    buttonName = "Esto es un botón del content";

    handleChange(data: any) {
        console.log("Change");
        this.buttonName = data.target.value;
    }
}
