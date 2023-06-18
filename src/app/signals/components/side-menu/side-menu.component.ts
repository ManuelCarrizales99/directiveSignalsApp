import { Component } from '@angular/core';

interface MenuItem{
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {


  // public menuItems: MenuItem[] = [
  //   { title: 'Counter', route: 'counter' },
  //   { title: 'User Info', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' },
  // ]

  // public menuItems = signal();
}
