import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = [];

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this._noteService.notesObserver.subscribe(
      notes => this.notes = notes);
    this._noteService.retrieveAll();
  }

}
