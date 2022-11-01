import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { NoteService } from 'src/app/services/noteService/note.service';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
  @Input() childMessage:any;
  
  constructor(public dialog:MatDialog) { }

  openDialog(){
    this.dialog.open(UpdateComponent)
  }
}
