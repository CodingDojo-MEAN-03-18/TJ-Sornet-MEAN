import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  newNote: Note = new Note();

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit(note: Note) {
    this._noteService.createNote(this.newNote);
    this.newNote = new Note();
  }

}
