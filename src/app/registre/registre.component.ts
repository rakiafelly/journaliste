import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  registreForm?: FormGroup
  submitted = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    {
      this.registreForm = new FormGroup(
        {
          firstname: new FormControl('', Validators.required),
          lastname: new FormControl('', Validators.required),
          username: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),

        })
    }

  }

  registre() {
    this.submitted = true;
    if (this.registreForm?.invalid) {
      return;
    }
    this.authService.registre(this.registreForm?.value).subscribe((response => {
      console.log(response);
      this.router.navigateByUrl('/login');
    }), (error => { console.log(error) }))
  }

}
