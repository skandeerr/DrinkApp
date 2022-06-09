import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  nomC: any;
  cocktails : any = [] ;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.nomC = this.route.snapshot.params['nomC'];
    console.log(this.nomC);
    this.getCocktailbyCategories();
  }
  getCocktailbyCategories(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+this.nomC).then(res=>{
      this.cocktails = res.data.drinks;
      console.log(this.cocktails);
    }).catch(err=>{
      console.log(err);
    })
  }
  
}
