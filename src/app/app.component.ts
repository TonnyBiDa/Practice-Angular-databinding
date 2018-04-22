import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [
    {type: 'server', name: 'Angular Lifecycle', content: 'constructor->ngOnInit->ngOnChanges->ngDoCheck' +
      '->ngAfterContentInit->ngAfterContentChecked->ngAfterViewInit->ngAfterViewChecked->ngOnDestroy'},
    {type: 'server', name: 'Encapsulation', content: 'ViewEncapsulation set to None make the this component' +
      ' css become globally and also influence other components.'},
    {type: 'server', name: 'Local Reference', content: '#.. using local reference ' +
      '(need to NOTICE: reference name not created in TS only in the template!!!)'},
    {type: 'server', name: 'Local Reference', content: 'Can fetch Reference through ViewChild(). ' +
      'Notice: Do not use Reference from TS to set value to the template'},
    {type: 'server', name: 'ng-content', content: 'Remove part of html to the parent component by using ng-content>'}
    ];

  onAddServer(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onAddBlueprint(blueprintData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }

  onDestroy() {
    this.serverElements.splice(0, 1);
  }
}
