import { Component } from '@angular/core';
import {User} from './user.modal';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  user:User=new User();
  submit(){
    console.log(this.user);
  }
}
