import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../common/entity.component';
import { HttpService } from '../server/http.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // buttonArrayForCategory!: Observable<any>;

  @Input() buttonArrayForCategory!: Category[];

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {

    // this.buttonArrayForCategory  = this.httpService.getCategory();

  }

}
