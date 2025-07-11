import { Routes } from "@angular/router";
import { ContentNoteComponent } from "./features/content-note/content-note";

export const routes: Routes = [
    {
        path: "",
        component: ContentNoteComponent,
    },
    {
        path: "notes",
        component: ContentNoteComponent,
    },
];
