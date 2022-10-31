import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
  notes:any;
  constructor(private note: NoteService) { }
  ngOnInit() {
    // this.note.getAllNotes().subscribe(data=>{
    //   this.notes.data;
    // })
  }
}
