import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
    declarations : [
      HeaderComponent,
      FooterComponent
    ],
    imports : [
        CommonModule,
        RouterModule,
        NgbModule
    ],
    exports : [
       HeaderComponent,
       FooterComponent
    ],
    providers : []
})
export class SharedModule { }
