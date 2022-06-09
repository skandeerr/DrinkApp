import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.scss']
})
export class CocktailSearchComponent implements OnInit {
cocktails : any = [];
  constructor() { }

  ngOnInit(): void {
  }
  searchcoktail(search : any){
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+search).then(res=>{
      this.cocktails = res.data.drinks;
      console.log(this.cocktails);
    }).catch(err=>{
      console.log(err);
    })
  }

}
