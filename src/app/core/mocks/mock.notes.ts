// src/app/features/notes/mocks/mock-notes.ts

export interface Note {
    id: number;
    title: string;
    content: string;
}

export const NOTES: Note[] = [
    {
        id: 1,
        title: "Reunión de trabajo",
        content:
            "Preparar presentación para el proyecto X. Incluir gráficos de rendimiento y plan de acción.",
    },
    {
        id: 2,
        title: "Lista de compras",
        content: "Comprar leche, pan, huevos y frutas. No olvidar el café.",
    },
    {
        id: 3,
        title: "Ideas para el blog",
        content:
            "Escribir sobre tendencias en desarrollo web y Angular 18. Incluir ejemplos prácticos.",
    },
];
