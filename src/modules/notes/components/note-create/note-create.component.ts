import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<NoteCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, private noteService: NoteService) { }
  
  title = new FormControl();
  body = new FormControl();


  ngOnInit(): void {
  }

  createNote(){
    let note = {
      title: this.title.value,
      body: this.body.value
    }
    this.noteService.createNote(note);
    this.title.setValue('')
    this.body.setValue('')

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
