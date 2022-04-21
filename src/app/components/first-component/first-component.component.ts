import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Jéssica';
  age: number = 30;
  job: string = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = { name: 'argo', year: 2022 };

  constructor() {}

  ngOnInit(): void {}
}
