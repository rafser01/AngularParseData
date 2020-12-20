import { Component } from '@angular/core';
import { User } from './model/user.model';
import { UserRepository } from './model/user.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput: string;
  rawData: User;
  formattedData: User;
  constructor(private respository: UserRepository) {}
  parse(): void{
    this.respository.getRawData(this.userInput).subscribe(rawData => {
      this.rawData = rawData;
    });
    this.respository.getFormatedData(this.userInput).subscribe(formattedData => {
      this.formattedData = formattedData;
    });
  }

}
