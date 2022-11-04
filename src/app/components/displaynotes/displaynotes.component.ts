import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventEmitter } from '@angular/core';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
  @Input() GetNote: any;
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output() updatedisplay = new EventEmitter<string>();
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(noteArray: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: noteArray,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
    });
  }

  recieveArchiveNote(event: any) {
    this.changeNoteEvent.emit(event);
  }
  iconRefresh(event: any) {
    console.log(event);
    this.changeNoteEvent.emit(event)
  }
}
