import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  noteText: string = "";
  subscription: Subscription | undefined;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    let note = new Note(0, this.noteText, false);

    this.notesService.addNote(note);
  }
}
