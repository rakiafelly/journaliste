import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm?: FormGroup;
  submitted = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),

      })
  }
  login() {
    this.submitted = true;
    if (this.loginForm?.invalid) {
      return;
    }
    this.authService.login(this.loginForm?.value.username, this.loginForm?.value.password).
      subscribe((response: any) => {
        console.log(response);
        if (response.length > 0) {
          this.router.navigateByUrl('/list')

        }
        else{
          alert('fausse informations')
        }
      }, (error: any) => { console.log(error) })
  }
}