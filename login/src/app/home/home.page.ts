import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  errors = [
    {type: 'required', message: 'Field cannot be empty'},
    {type: 'maxlength', message: 'Field cannot be more than 5 characters'}
  ]
  login = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(4)])
  })

  constructor() {}

}
