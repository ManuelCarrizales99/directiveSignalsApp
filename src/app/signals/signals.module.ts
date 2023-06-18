import { CommonModule } from '@angular/common';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { NgModule } from '@angular/core';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SignalsRoutingModule } from './signals-routing.module';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    RouterModule
  ]
})
export class SignalsModule { }
