import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  idC : any;
  cocktails : any = [];
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.idC = this.route.snapshot.params['idC'];
    this.getCocktailbyId();
    console.log(this.idC);
  }
  getCocktailbyId(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+this.idC).then(res=>{
      this.cocktails = res.data.drinks[0];
      console.log(this.cocktails);
    }).catch(err=>{
      console.log(err);
    })
  }

}
