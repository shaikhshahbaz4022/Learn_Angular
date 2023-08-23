import { categories } from './../menu-interface';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {
  constructor(private menuservice: MenuService) {}
  Foods: { categories: categories[] } = { categories: [] };

  ngOnInit(): void {
    this.getAllMenus();
  }
  getAllMenus() {
    this.menuservice.listMenu().subscribe((food) => {
      return (this.Foods.categories = food.categories);
    });
  }
}
