import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SiderbarComponent,
    MenuComponent,
    FooterComponent
  ],
  exports:[
    SiderbarComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
