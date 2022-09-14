import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';
import { NoteEditComponent } from '../note-edit/note-edit.component';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.getNote();
  }

  note!: any;
  noteInfos :any[] = []
  getNote(){
    this.route.params.forEach(params=>{
      let id = params['id']
      this.note = this.noteService.getNoteById(id);
      this.noteInfos = this.getDisplayNote(this.note)
    })
    
  }

  getDisplayNote(note:any){
    return [
      {label: 'Title', value:note.getTitle()},
      {label: 'Creation date', value:note.getCreationDate()},
      {label: 'Body', value:note.getBody()},
    ]
  }
  deleteNote(){
    this.noteService.deleteNote(this.note)
    this.router.navigateByUrl('/notes/all')
  }

  editNote(){
      let dialogRef = this.dialog.open(NoteEditComponent, {
        width: '450px',
        height: '450px',
        data: { note: this.note}
      });
      dialogRef.afterClosed().subscribe(result=>{
        console.log("result from created note", result)
      })

  }

  toNoteDetails(){
    this.router.navigateByUrl('/notes/all')
  }

}
