import { NgModule } from '@angular/core';
import { Constant } from './constant.model';
import { User } from './user.model';
import {UserRepository} from './user.repository';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [ HttpClientModule ],
  providers: [UserRepository, Constant],
  exports: []
})
export class ModelModule {}
