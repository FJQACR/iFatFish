import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carousel } from '../common/entity.component';

import { HttpService } from '../server/http.service';

@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.css']
})
export class CarouselComponent implements OnInit {

  //  @Input() carouselList: Array<any> = [];
  @Input() carouselList!: Carousel[];
  // carouselList!: Observable<any>;

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {

    // console.log('CarouselComponent ngOnInit');
    // console.log(this.carouselList);
    // console.log(this.carouselList[0].carouselStatus = "item active");
    // console.log('CarouselComponent ngOnInit end');

    // console.log(JSON.stringify(this.carouselList));
    // this.carouselList = [
    //   new Carousel(1,'第一个商品','http://placehold.it/800X300','3.5','这是第一个商品，我在学习慕课网Angular入门实战时创建的'),
    //   new Carousel(2,'第二个商品','http://placehold.it/800X300','2.5','这是第二个商品，我在学习慕课网Angular入门实战时创建的'),
    //   new Carousel(3,'第三个商品','http://placehold.it/800X300','4.5','这是第三个商品，我在学习慕课网Angular入门实战时创建的'),
    //   new Carousel(4,'第四个商品','http://placehold.it/800X300','1.5','这是第四个商品，我在学习慕课网Angular入门实战时创建的'),
    // ]

    // this.carouselList = this.httpService.getCarousels();
    // console.log('this.carouselList');
    // console.log(this.carouselList);

  }

  bannerClick(carouselItem: any) {

    this.httpService.saveUsageTrack('Link', 'Banner', carouselItem.carouselId);

    window.location.href = carouselItem.carouselUrl;
  }

}


