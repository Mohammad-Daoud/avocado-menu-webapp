import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {ImageModalService} from "../../services/image-modal.service";

@Component({
  selector: 'juice',
  templateUrl: './juice.component.html',
  styleUrls: ['./juice.component.css']
})
export class JuiceComponent implements OnInit {
  juices: any[] = [];

  constructor(private menuService: MenuService, private imageModalService: ImageModalService) {
  }

  ngOnInit(): void {
    this.menuService.getMenu("juices").subscribe(data => {
      this.juices = data;
    });
  }

  openImageModal(juice: any) {
    this.imageModalService.open({
      imageUrl: juice.imageUrl,
      title: juice.title,
      description: juice.description
    });
  }
}
