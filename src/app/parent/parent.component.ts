import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Counter:number =0;
  ClickCounter?:number;
  constructor() { }

  ngOnInit(): void {
  }
  increment(){
   this.Counter++;
  }
  decrement(){
    this.Counter--;
   }

   countChangedHandler(count: number) {
    this.ClickCounter = count;
    console.log(count);
  }
}
