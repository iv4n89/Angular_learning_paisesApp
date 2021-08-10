import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
    li:hover:not(.active) {
      background-color: rgba(0,0,200,0.1);
    }
  `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
