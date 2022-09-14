import { NoteCreateComponent } from "./note-create/note-create.component";
import { NoteDetailComponent } from "./note-detail/note-detail.component";
import { NoteEditComponent } from "./note-edit/note-edit.component";
import { NotesListComponent } from "./notes-list/notes-list.component";

export const components = [
    NoteCreateComponent,
    NoteDetailComponent,
    NotesListComponent,
    NoteEditComponent
];

export const entryComponents = [
    NoteCreateComponent,
    NoteEditComponent
]

export * from "./note-create/note-create.component";
export * from "./note-detail/note-detail.component";
export * from "./notes-list/notes-list.component";
export * from "./note-edit/note-edit.component";
