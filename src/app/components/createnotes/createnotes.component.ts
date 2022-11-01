import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  createNote!: FormGroup;
  panelOpenState = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private note: NoteService) { }

  ngOnInit(): void {
    this.createNote = this.formBuilder.group({
      title: ['', Validators.required],
      discription: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.createNote.valid) {
      console.log("valid Data",this.createNote.value);
      console.log("do Api call");
      let data = {
        title: this.createNote.value.title,
        discription: this.createNote.value.discription,
      }
      this.note.addNotes(data).subscribe((response:any)=>{
        console.log(response);
      })
     // this.resetForm();
    }else{
      console.log("Invalid Data",this.createNote.value);
      console.log("no api call")
    }
  }
  
  resetForm() {
    this.createNote.reset();
  }
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }

}
