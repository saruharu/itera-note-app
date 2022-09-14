import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNotes(): Note[]{
    let stringValues = localStorage.getItem('notes') || '';
    let notesList = stringValues.split(';').filter(item=>item!='').map(item=> new Note(JSON.parse(item)));
    console.log("notesList",notesList)
    return notesList;
  }

  createNote(rawNote:any){
    let note;
    if(!localStorage.getItem('notes')){
      
      rawNote.id='1'
      note = new Note(rawNote);
      localStorage.setItem('notes',note.toString())
    }
    else{
      rawNote.id = localStorage.getItem('notes')?.split(';').length
      note = new Note(rawNote);

      localStorage.notes+=note.toString();
    }
    

    console.log("notes",note)

    window.location.reload()
    
  }

  getNoteById(id: string){
    let notesList = this.getNotes();
    return notesList.find(item=>item.getId()==id);
  }

  deleteNote(note: any){
    let updatedNotesList = this.getNotes().filter(item=>item.getId()!=note.getId())
    localStorage.notes = updatedNotesList.map(item=>item.toString()).join(';')
    console.log("updatedNotesList",updatedNotesList)
  }

  editNote(note: any){
    let notes = this.getNotes()
    let currentNoteIndex = notes.findIndex((item:Note)=>item.getId()==note.getId())
    notes[currentNoteIndex] = note;
    localStorage.notes = notes.map(item=>item.toString()).join(';')


  }
}
