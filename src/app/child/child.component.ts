import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() count?:number;
  counte:number =0;
  @Output() countChanged:EventEmitter<number> = new EventEmitter();
  constructor() { }
  increment() {
    this.counte++;
    this.countChanged.emit(this.counte);
  }
decrement() {
    this.counte--;
    this.countChanged.emit(this.counte);
}
  ngOnInit(): void {
  }

}
