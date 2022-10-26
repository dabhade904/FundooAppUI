import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      emailIdValidater: ['', Validators.required]
    })
  }
  get f() {
    return this.forgetPasswordForm.controls
  }
  onSubmit() {
    this.submitted = false;
    if (this.forgetPasswordForm.invalid) {
      return;
    }
    alert('Success! \n\n' + JSON.stringify(this.forgetPasswordForm.value, null, 4));
  }
}
