import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onToggle(){
    this.toggleSideBar.emit();
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },100);
  }
}
