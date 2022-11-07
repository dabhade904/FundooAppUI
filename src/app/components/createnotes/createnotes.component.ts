import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/noteService/note.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  //@Input() GetNote: any;
  show = false;
  createNote!: FormGroup;
  panelOpenState = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private note: NoteService) { }

  ngOnInit(): void {
    this.createNote = this.formBuilder.group({
      title: ['', Validators.required],
      discription: ['', Validators.required],
      color:" "
    });
  }
  isShow() {
    this.show = true;
  }
  onSubmit() {
    this.submitted = true;
    this.show = false;
    if (this.createNote.valid) {
      console.log("valid Data", this.createNote.value);
      console.log("do Api call");
      let data = {
        title: this.createNote.value.title,
        discription: this.createNote.value.discription,
        color:this.createNote.value.color
      }
      this.note.addNotes(data).subscribe((response: any) => {
        console.log(response);
        this.messageEvent.emit(response)
      })
      this.resetForm();
    } else {
      console.log("Invalid Data", this.createNote.value);
      console.log("no api call")
    }
  }

  resetForm() {
    this.createNote.reset();
  }
}
