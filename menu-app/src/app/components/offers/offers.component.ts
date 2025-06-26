import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {ImageModalService} from "../../services/image-modal.service";

interface Offer {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
}

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: any[] = [];

  constructor(private menuService: MenuService, private imageModalService: ImageModalService) {
  }

  ngOnInit(): void {
    this.menuService.getMenu("offers").subscribe(data => {
      this.offers = data;
    });
  }

  openImageModal(offer: any) {
    this.imageModalService.open({
      imageUrl: offer.imageUrl,
      title: offer.title,
      description: offer.description
    });
  }
}
