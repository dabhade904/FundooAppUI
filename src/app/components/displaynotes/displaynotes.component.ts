import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
  @Input() GetNote: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(noteArray: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: noteArray,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

}
