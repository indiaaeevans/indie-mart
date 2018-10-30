import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styles: [ `
  .active-link { font-weight: bold; border-bottom: 2px solid #005005;}
  `]
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
