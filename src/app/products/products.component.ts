import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Challenge } from '../../model/challenge';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  requiredData : Challenge[] = [];
  cartArray:number[] = [];
  ratingValue = " ";
  someQuery:string;
  query;
  querySort;
  constructor(private appService : AppServiceService) { }

  ngOnInit() {
    this.repoFunction();
  }

  repoFunction(){
    this.appService.getData().subscribe(
      (respo:any) => { this.requiredData = respo }
    );
  }

  someFunction(){
      this.query = this.someQuery;
  } 

  addFunction(value){
      this.cartArray.push(value);
  }

  sortFunction(){
    this.querySort = this.ratingValue;
  }
}
