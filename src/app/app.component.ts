import { Component } from '@angular/core';
import { MealServiceService } from './meal-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'June19';
  searchInputVal = '';
  mealsDataObj:any;mealsData:any;
  recipeDataObj:any;recipeData:any;
  mealDetailsDisplay = false;
  constructor(private mealService:MealServiceService){}
  closeMealDetails(){
    this.mealDetailsDisplay = false;
  }
  getMealList(value){
    console.log("value------------->",value);
    if(value == '' || value == undefined){
      Swal.fire('Invalid','Please Enter Valid Ingredients.','warning')
      return false;
    }
    this.mealService.getMealList(value).subscribe((result)=>{
      this.mealsDataObj = result;
      this.mealsData = this.mealsDataObj.meals;
      console.log("result from get services---------------->",this.mealsData);
      if(this.mealsData == null || this.mealsData.length < 1){
        Swal.fire({
          title:'No Data Found !!',
          icon:"warning",
          confirmButtonText: 'OK',
        }).then((result)=>{
          if(result.isConfirmed){
            console.log("564");
            this.searchInputVal = '';
          }
        })
      }
    })
  }
  getRecipe(mealId){ 
    this.mealDetailsDisplay = true;
    console.log("mealId------------------>",mealId);
    this.mealService.getMealByID(mealId).subscribe((result)=>{
      this.recipeDataObj = result;
      this.recipeData = this.recipeDataObj.meals[0];
      console.log("result from getRecipe------------>",this.recipeData);
    })
  }
}
