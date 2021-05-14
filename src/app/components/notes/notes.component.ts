import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from '../../models/note'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  componentName: string = "Notes Component";
  subscription: Subscription | undefined;
  notesList: Note[] = [];

  constructor(private notesService: NotesService) {

  }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe(x => {
      this.notesList = x;
    });

    this.subscription = this.notesService
      .currentMessage
      .subscribe(note => this.notesList.push(note));
  }

  onDeleteNote(e: Note) {
    this.notesList = this.notesList.filter(x => x.Id !== e.Id);
    this.notesService.deleteNote(e);
  }
}
