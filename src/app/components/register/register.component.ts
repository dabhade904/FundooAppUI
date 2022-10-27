import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserServiceService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log("valid data", this.registerForm.value);
      console.log("do api call");
      let data = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        emailId: this.registerForm.value.emailId,
        password: this.registerForm.value.password
      }
      this.user.register(data).subscribe((Response: any) => {
        console.log(Response);
      })
    }
    else {
      console.log("invalid data", this.registerForm.value);
      console.log("no api call");
    }
  }
}