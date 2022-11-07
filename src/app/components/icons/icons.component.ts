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

  colorArray =[{colorCode:"maroon"},
  {colorCode:"silver"},
  {colorCode:"Yellow"},
  {colorCode:"Purple"},
  {colorCode:"pink"},
  {colorCode:"chocolate"},
  {colorCode:"Wheat"},
  {colorCode:"indigo"},
  {colorCode:"hotpink"},
  {colorCode:"lightblue"},
  {colorCode:"green"},
  {colorCode:"olive"}];
  noteListId: any;
  
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
      noteID: this.noteCard.noteID
    }
    console.log(reqdata);
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    })
  }
  onClickTrash() {
    let data = {
      noteID: this.noteCard.noteID
    }
    console.log(data);
    this.note.trashNote(data).subscribe((Response: any) => {
      console.log(Response);
      window.location.reload();
    })
  }
  onUnArchievenote() {
    let reqdata = {
      noteID: this.noteCard.noteID,
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    })
  }
  onRestore() {
    let reqdata = {
      noteID: this.noteCard.noteID,
      isTrash: false,
    }
    this.note.trashNote(reqdata).subscribe((response: any) => {
      console.log(response);
      window.location.reload();

    })
  }
  applyColor(color: any) {
    this.noteListId = this.noteCard.color = color;
    let reqData = {
      color: color,
      noteID:this.noteCard.noteID,      
    };
    this.note.noteColor(reqData).subscribe((response: any) => {
      console.log(response);
      this.changeNoteEvent.emit(response);
      console.log("color", reqData)
    })
  }   
}


