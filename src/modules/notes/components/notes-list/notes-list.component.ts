import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NoteCreateComponent } from '../note-create/note-create.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor(private noteService: NoteService,public dialog: MatDialog, private router: Router) { }
  

  ngOnInit(): void {
    this.getNotes();
  }
  notesList: Note[]= []
  getNotes(){
    this.notesList = this.noteService.getNotes();
  }

  createNote(){
    let dialogRef = this.dialog.open(NoteCreateComponent, {
      width: '450px',
      height: '450px',
      // data: 
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log("result from created note", result)
    })
  }


  toNoteDetails(note: Note){
    this.router.navigateByUrl('/notes/'+note.getId())
  }
}
