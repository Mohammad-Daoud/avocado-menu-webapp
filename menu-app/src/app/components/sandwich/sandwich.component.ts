import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.css']
})
export class SandwichComponent  {
  sandwichTypes = ['burgers', 'chicken', 'shawerma', 'crispy', 'steak', 'others'];
  sandwichesByType: { [key: string]: any[] } = {};
  activeType: string | null = null;


  constructor(private  menuService: MenuService)  {}


  onTabClick(accordionPanel: HTMLElement, type: string): void {
    this.loadSandwiches(type);
    accordionPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  loadSandwiches(type: string): void {
    if (this.activeType === type) {
      this.activeType = null;
    } else {
      this.menuService.getMenu("sandwiches/"+type).subscribe((sandwiches: any[]) => {
        this.sandwichesByType[type] = sandwiches;
        this.activeType = type;
      });
    }
  }


}
