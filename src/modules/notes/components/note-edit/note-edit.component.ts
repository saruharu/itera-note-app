import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<NoteEditComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, private noteService: NoteService) { }

    title = new FormControl();
    body = new FormControl();

    note = this.dialogData.note;
  
    ngOnInit(): void {
      this.title.setValue(this.dialogData.note.getTitle());
      this.body.setValue(this.dialogData.note.getBody());

    }
  
    editNote(){

      let note = {
        title: this.title.value,
        body: this.body.value
      }
      this.note.setTitle(note);
      this.note.setBody(note);
      console.log("new note",this.note)

      this.noteService.editNote(this.note);

      this.dialogRef.close()
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
}
