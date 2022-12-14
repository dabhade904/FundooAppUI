import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login !: FormGroup;
  submitted = false;
  user = '1'
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private router: Router) { }
  ngOnInit() {
    localStorage.setItem('SeesionUser', this.user)
    this.login = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

  }
  onSubmit() {
    this.submitted = true;
    if (this.login.valid) {
      console.log("do api call");
      let data = {
        emailId: this.login.value.emailId,
        password: this.login.value.password
      }
      this.userService.login(data).subscribe((Response: any) => {
        console.log('responce :=>', Response.tokan);
        localStorage.setItem('tokan', Response.tokan)
      })
    } else {
      console.log("Invalid data", this.login.value);
      console.log("no api call");
    }
    this.router.navigateByUrl('/dashboard')
  }

  resetForm() {
    this.login.reset();
  }

}
