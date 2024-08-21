import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'juice',
  templateUrl: './juice.component.html',
  styleUrls: ['./juice.component.css']
})
export class JuiceComponent implements OnInit {
  juices: any[] = [];

  constructor(private  menuService: MenuService)  {}

  ngOnInit(): void {
    this.menuService.getMenu("juices").subscribe(data => {
      this.juices = data;
    });
  }
}
