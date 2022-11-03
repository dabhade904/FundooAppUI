import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashNote: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getNotes().subscribe((res: any) => {
      console.log(res.data);
      this.trashNote = res.data
      this.trashNote = this.trashNote.filter((a: any) => {
        return a.trash === true;
      })
      console.log(this.trashNote);
    });
  }

}

