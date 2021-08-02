import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { User } from 'src/app/model/models';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {

  user: User
  signIn: FormGroup;
  emailControl = new FormControl();
  passwordControl = new FormControl();

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.signIn = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  login(form?: NgForm) {
    const user = new User();
    user.user_name = form?.value.email;
    user.password = form?.value.password;
    this.loginService.login(user).subscribe(
      data => {
        console.log(data);
      },
    );
  }

}
