import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None,
  // ViewEncapsulation set to none make the this component css become globally and also influence other components.
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement')element: {type: string, name: string, content: string};
  @ViewChild('header') header: ElementRef;


  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('OnChanges called after a bound input property changes');
    console.log(change);
  }

  ngOnInit() {
    console.log('ngOnInit called once the component is initialized');
    console.log('Text Content:' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called during every change detection run');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called after content (ng-content) has been projected into view');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called every time the projected content has been checked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called after the component’s view (and child views) has been initialized');
    console.log('Text Content:' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called every time the view (and child views) have been checked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called once the component is about to be destroyed');
  }
}
