import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  isArchive: boolean = false;
  isTrash: boolean = false;
  constructor(private note: NoteService,private activatedroute: ActivatedRoute) { }

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
    let data = {
      noteID: [this.noteCard.noteID]
    }
    console.log(data);
    this.note.archiveNote(data).subscribe((Response: any) => {
      console.log(Response);
    })
  }

  onClickTrash(){
    let data = {
      noteID: [this.noteCard.noteID]
    }
    console.log(data);
    this.note.trashNote(data).subscribe((Response: any) => {
      console.log(Response);
    })
  }
  onUnArchievenote() {
    let reqdata = {
      noteID: [this.noteCard.noteID],
    }
    this.note.archiveNote(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }
  onRestore() {
    let reqdata = {
      noteID: [this.noteCard.noteID],
      isTrash: false,
    }
    this.note.trashNote(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }
}

