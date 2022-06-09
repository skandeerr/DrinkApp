import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {HttpClientModule} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories : any = [] ;

  constructor( private route : Router ,
     private activeRoute: ActivatedRoute
     ) { }

  ngOnInit(): void {
   this.getCategorie()
   
   
    
    }
    getCategorie(){
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then(res=>{
        this.categories = res.data.drinks;
        console.log("categorie is",this.categories);
      }).catch(err=>{
        console.log(err);
      })
    }
    
   validCategorie(categorie:any){
      if(categorie.indexOf('/')==-1){
        return true;
      }else{
        return false;
      }
   }
  list(c:any):any{
    console.log(c);
    window.location.href = "/cocktail/"+c;


      
    console.log('/categorie/cocktail/',c)
    window

  }
}


 
