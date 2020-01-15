import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck {
    
    @Input() text: string;
  constructor() {
    console.log('Constructor');
  }
   ngOnChanges(): void {
    console.log('OnChanges');
  }
  ngOnInit() {
    console.log('OnInit');
  }
  ngDoCheck() {
    console.log('DoCheck')
  }
  ngAfterContentInit() {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }
}
