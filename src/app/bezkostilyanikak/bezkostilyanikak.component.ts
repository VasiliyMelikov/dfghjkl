import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bezkostilyanikak',
  templateUrl: './bezkostilyanikak.component.html',
  styleUrls: ['./bezkostilyanikak.component.css']
})
export class BezkostilyanikakComponent implements OnInit {
  @Input() text: string;  
  constructor() { }

  ngOnInit() {
  }

}
