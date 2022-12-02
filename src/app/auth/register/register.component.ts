import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AdminService } from 'src/app/auth/service/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({

  });
  submitted: boolean | undefined;
  isSubmitting: boolean | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private registerService: AdminService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
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
      ],
      email: [
        undefined,
        [
          Validators.required,

        ]
      ],
      mobile_no: [
        undefined,
        [
          Validators.required,

        ]
      ],
      address: [
        undefined,
        [
          Validators.required,
        ]
      ]
    })
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSendData(register: any) {
    this.submitted = true;
    console.log(register);
    if (this.registerForm.valid) {
      this.registerService.addRegister(register).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          // this.toasterService.success('Email Send Successfully.');
          // this.contactService.sendEmail(contact).subscribe();
        },
        (error: any) => {
          this.isSubmitting = false;
          // this.toasterService.error('Error on sending Email.');
        }
      );
    } else {
      // this.toasterService.error('Please enter your information.');
    }
  }

}
