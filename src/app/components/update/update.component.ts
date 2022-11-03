import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  noteId: any;
  constructor(private note: NoteService, public dailogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('dataaaaaaa======>   ', this.data)
    this.title = this.data.title;
    this.description = this.data.discription;
    this.noteId = this.data.noteID;
  }

  onNoClick() {
    let data = {
      title: this.title,
      discription: this.description,
    }
    this.note.updateNotes(data, this.noteId).subscribe((res: any) => {
      console.log(res);
      console.log(this.title, "------> ", this.description,' note id----> ',this.noteId);
    });
    this.dailogRef.close();
  }
}