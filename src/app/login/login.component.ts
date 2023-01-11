import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(_service:MainServiceService){
    // let courses = new MainServiceService;
    console.log('login', _service.getCourse())
  }

  toggle:boolean=true;
  toggleButton(){
    this.toggle=this.toggle?false:true;
  }

}
