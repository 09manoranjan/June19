import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MealServiceService {

  constructor(private http:HttpClient) { }
  link:any;
  getMealList(value){
    this.link="https://www.themealdb.com/api/json/v1/1/filter.php?i="+value;
    return this.http.get(this.link);
  }
  getMealByID(mealId){
    this.link="https://www.themealdb.com/api/json/v1/1/lookup.php?i="+mealId;
    return this.http.get(this.link);
  }
}
