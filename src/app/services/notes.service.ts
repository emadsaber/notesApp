import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  //for adding a new note from child component to a grand parent component
  //https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/
  private messageSource: BehaviorSubject<Note> = new BehaviorSubject(new Note(-1,"",false));
  currentMessage = this.messageSource.asObservable();

  constructor(private client: HttpClient) {
    
  }

  addNote(note: Note){
    this.messageSource.next(note);
  }

  getNotes(): Observable<Note[]> {
    return this.client.get(`${this.todosUrl}?_limit=10`, httpOptions)
      .pipe(map((r: any) => {
        //console.log(r);
        return r.map((item: any) => {
          return new Note(item.id, item.title, item.completed);
        })
      }));
  }

  toggleCompleted(note: Note){
    let todo ={
      id: note.Id,
      title: note.Text,
      completed: note.IsComplete
    };
    
    this.client.put(`${this.todosUrl}/${note.Id}`, todo, httpOptions).subscribe(
      x => {
        console.log(x);
      }
    );
  }

  deleteNote(e: Note) {
    this.client.delete(`${this.todosUrl}/${e.Id}`, httpOptions)
    .subscribe(x => {
      console.log(`note deleted`);
    });
  }
}
