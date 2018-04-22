import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') contentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(localInput: HTMLInputElement) {
    // using local reference (need to NOTICE: reference name not created in TS only in the template!!!)
    // console.log(this.contentInput.nativeElement.value);
    this.serverCreated.emit({name: localInput.value, content: this.contentInput.nativeElement.value});
  }

  onAddBlueprint(localInput: HTMLInputElement) {
    this.blueprintCreated.emit({name: localInput.value, content: this.contentInput.nativeElement.value});
  }
}
