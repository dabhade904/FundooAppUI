import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
  getNotes: any;
  noteArray: any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getNotes().subscribe((response: any) => {
      console.log(response.data);
      this.noteArray = response.data;
      this.noteArray = this.noteArray.filter((a: any) => {
        return a.archive === false;
      })
      this.noteArray = this.noteArray.filter((a: any) => {
        return a.trash === false;
      })
    })
  }
  receiveMessage($event: any) {
    console.log($event);
    this.getAllNote();
  }
}