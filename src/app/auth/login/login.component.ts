import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm :FormGroup= new FormGroup({});  

submitted: boolean | undefined;
isSubmitting:boolean|undefined;


constructor(
  private formBuilder: FormBuilder,
  private loginService: AdminService,
) { }

ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    name: [
      undefined,
      [
        Validators.required,

      ]
    ],
    password: [
      undefined,
      [
        Validators.required,

      ]
    ]
  })
}
get forms(): { [key: string]: AbstractControl } {
  return this.loginForm.controls;
}

onLoginData(login: any) {
  this.submitted = true;
  console.log(login);
  if (this.loginForm.valid) {
    this.loginService.addLogin(login).subscribe(
      (response: any) => {
        this.isSubmitting = false;
      },
      (error: any) => {
        this.isSubmitting = false;
      }
    );
  } else {
  }
}

}