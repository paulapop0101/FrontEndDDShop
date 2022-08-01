import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input() page1: Boolean = false;
  @Input() page2: Boolean = false;
  @Input() page3: Boolean = false;
  @Input() page4: Boolean = false;
  @Input() page5: Boolean = false;
  @Input() page6: Boolean = false;
  @Input() page7: Boolean = false;
  ngOnInit(): void {
  }

}
