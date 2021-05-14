import { isDefined } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { EventEmitter, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Note = new Note(0, "", false);
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter();

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  onDelete(e: Note){
    this.deleteNote.emit(e);
  }

  onNoteToggle(){
    this.note.IsComplete = !this.note.IsComplete;
    this.notesService.toggleCompleted(this.note);
  }
  setClasses(){
    return {
      row: true,
      note: true,
      'is-complete': this.note.IsComplete
    }
  }
}
