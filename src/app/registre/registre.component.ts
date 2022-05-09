import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
registreForm?:FormGroup
  constructor() { }

  ngOnInit(): void {{ this.registreForm=new FormGroup(
    {
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    
    })
  }

  }}
