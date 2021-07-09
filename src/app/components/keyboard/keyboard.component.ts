import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  public numberKeys: Array<Array<string>> = [ 
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['-', '0', '+'],
  ];

  public actionKeys: Array<string> = ['', 'CANCEL', 'CLEAR', 'ENTER'];

  constructor() { }

  ngOnInit(): void {
  }

}
