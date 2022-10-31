import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserServiceService) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      emailId: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = false;
    if (this.forgetPasswordForm.valid) {
      console.log("Do Api Call")
      let data = {
        emailId: this.forgetPasswordForm.value.emailId
      }
      this.user.forgetPassword(data).subscribe((Response: any) => {
        console.log(Response);
      })
      this.resetForm();
    } else {
      console.log("No Api Call")
    }
  }
  resetForm() {
    this.forgetPasswordForm.reset();
  }
}
