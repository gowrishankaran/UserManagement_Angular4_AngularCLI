import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidenavToggler') sidenavToggle;

  public isCollapsed = true;


  constructor(private renderer: Renderer2) {
    //this.renderer.addClass(document.body, 'modal-open');
  }

  ngOnInit() {
  }

  sideNavToggle() {
  	console.log('Toggle');
  	// console.log(this.sidenavToggle.nativeElement.style.color = 'red');
  	// console.log(document.body.classList.toggle('sidenav-toggled'));

  	document.body.classList.toggle('sidenav-toggled');

  	// this.renderer.addClass(document.body, 'sidenav-toggled');

  	// this.renderer.removeClass(document.body, 'sidenav-toggled');
  }

}
