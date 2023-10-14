import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

interface Credentials { email?: string; password?: string }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),

    location: this.fb.group({
      street: [''],
      zipCode: [''],
      city: ['']
    })
  });

  public credentials!: Credentials

  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.controls.credentials
    console.log(this.userForm.controls.credentials)

    this.credentials = {}
    this.credentials.email = this.userForm.controls.credentials.controls.email.value as string
    this.credentials.password = this.userForm.controls.credentials.controls.password.value as string


  }

  constructor(private fb: FormBuilder) { }


}
// Lors du submit, les credentials apparaissent bien dans une propriété credentials de l'objet littéral userForm.value