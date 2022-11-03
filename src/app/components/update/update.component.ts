import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  noteId: any;
  constructor(public dailogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('dataaaaaaa======>   ', this.data)
    this.title = this.data.title;
    this.description = this.data.discription;
    this.noteId = this.data.noteId;
  }

  onNoClick() {
    console.log(this.title, "------> ", this.description);
    this.dailogRef.close();
  }
}