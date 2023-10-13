import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userForm = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
    location: this.fb.group({
      street: [''],
      zipCode: [''],
      city: ['']
    })
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

  constructor(private fb: FormBuilder) { }


}
