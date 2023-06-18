import { RouterModule, Routes } from '@angular/router';

import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { NgModule } from '@angular/core';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter', component: CounterPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: 'user-info', component: UserInfoPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
