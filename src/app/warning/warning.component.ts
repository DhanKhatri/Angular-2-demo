import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
/*value = '';
onKey(event: any){
  this.value += event.target.value + '';
}*/
boxes = ['Abc', 'efg'];
addBox(newBox: string){
  if (newBox){
    this.boxes.push(newBox);
  }
}
  constructor() { }

  ngOnInit() {
  }

}

