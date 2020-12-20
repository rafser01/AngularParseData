import { Injectable } from '@angular/core';

@Injectable()
export class Constant {
  v1BaseUrl: string;
  v2BaseUrl: string;
  constructor() {
    this.v1BaseUrl = 'http://localhost:3000/api/v1/';
    this.v2BaseUrl = 'http://localhost:3000/api/v2/';
  }
}