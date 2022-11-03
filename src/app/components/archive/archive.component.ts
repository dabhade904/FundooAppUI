import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteArray: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getNotes().subscribe((res: any) => {
      console.log(res.data);
      this.noteArray = res.data
      this.noteArray = this.noteArray.filter((a: any) => {
        return a.archive === true;
      })
      console.log(this.noteArray);
    });
  }

}
