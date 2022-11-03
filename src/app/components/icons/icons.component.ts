import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }
  onArchiev() {
    let data = {
      noteID: [this.noteCard.noteID]

    }
    console.log(data);
    this.note.archiveNote(data).subscribe((Response: any) => {
      console.log(Response);
    })
  }
}
