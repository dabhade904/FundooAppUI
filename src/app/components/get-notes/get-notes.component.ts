import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
  noteArray: any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getNotes().subscribe((response: any) => {
      console.log(response.data);
      this.noteArray = response.data;
    })
  }
  receiveMessage(e: any) {
    console.log(e);
    this.getAllNote();
  }
}
