import { Component, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  @Output() changeNoteEvent = new EventEmitter<any>();
  @Output() displayIcons = new EventEmitter<any>();
  isArchive: boolean = false;
  isTrash: boolean = false;
  constructor(private note: NoteService, private activatedroute: ActivatedRoute) { }

  colorarray =[{Colorcode:"rgb(153, 0, 51)"},
  {Colorcode:"rgb(102, 255, 102)"},
  {Colorcode:"rgb(51, 102, 204)"},
  {Colorcode:"rgb(0, 255, 255)"},{Colorcode:"rgb(255, 0, 255)"},
  {Colorcode:"rgb(255, 51, 0)"},{Colorcode:"rgb(0, 51, 0)"},
  {Colorcode:"rgb(255, 255, 0)"},{Colorcode:"rgb(255, 140, 26)"},
  {Colorcode:"rgb(102, 204, 255)"},
  {Colorcode:"rgb(38,30,238)"},
  {Colorcode:"rgb(51, 153, 102)"}];
  NoteListId: any;
  
  ngOnInit(): void {
    let Component = this.activatedroute.snapshot.component;
    if (Component == TrashComponent) {
      this.isTrash = true;
    }
    if (Component == TrashComponent) {
      this.isArchive = true;
    }
  }
  onClickArchive() {
    let reqdata = {
      noteID: [this.noteCard.noteID]
    }
    console.log(reqdata);
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    })
  }
  onClickTrash() {
    let data = {
      noteID: [this.noteCard.noteID]
    }
    console.log(data);
    this.note.trashNote(data).subscribe((Response: any) => {
      console.log(Response);
      window.location.reload();
    })
  }
  onUnArchievenote() {
    let reqdata = {
      noteID: [this.noteCard.noteID],
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    })
  }
  onRestore() {
    let reqdata = {
      noteID: [this.noteCard.noteID],
      isTrash: false,
    }
    this.note.trashNote(reqdata).subscribe((response: any) => {
      console.log(response);
      window.location.reload();

    })
  }
  setColor(color: any) {
    this.NoteListId = this.noteCard.color = color;
    let reqData = {
      color: color,
      noteID: [this.noteCard.noteID],      
    };

   console.log(this.NoteListId);
   
    this.note.noteColor(reqData).subscribe((response: any) => {
      console.log(response);
      this.changeNoteEvent.emit(response);

      console.log("color", reqData)

    })

  }
 
    
}


