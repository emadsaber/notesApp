import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {RouterLink, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeaderComponent,
    NoteItemComponent,
    AddNoteComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
