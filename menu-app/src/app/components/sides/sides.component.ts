import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.css']
})
export class SidesComponent implements OnInit {
  sides: any[] = [];

  constructor(private  menuService: MenuService)  {}

  ngOnInit(): void {
    this.menuService.getMenu("sides").subscribe(data => {
      this.sides = data;
    });
  }
}
