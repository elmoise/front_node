import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  profileForm = new FormGroup({
    uname: new FormControl(''),
    psw: new FormControl(''),
  });

  onSubmit(){
    if (this.profileForm.value.uname=='moussa@gmail.com' && this.profileForm.value.psw=='passer123'){
      this.router.navigate(['button'])
    }
    else{
      alert('verifier vos identifiants')
    }
  }


}
