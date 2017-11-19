import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ViewChild('sidenavToggler') sideNavBtnRef;

  public isCollapsed = true;
  sideNavIcon: boolean;

  constructor(private renderer: Renderer2) {
    this.sideNavIcon = false;
  }

  ngOnInit() {
  }

  sideNavToggle() {
    // document.body.classList.toggle('sidenav-toggled');

    if (document.body.classList.contains('sidenav-toggled')) {
      this.renderer.removeClass(document.body, 'sidenav-toggled');
      this.sideNavIcon = false;
    } else {
      this.renderer.addClass(document.body, 'sidenav-toggled');
      this.sideNavIcon = true;
    }
  }
}
