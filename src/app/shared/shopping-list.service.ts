import { Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";

@Injectable()
export class ShoppingListService {

    private _ingredients: Ingredient[];

    constructor() {
        this._ingredients = [];
        let temp = [ 
          new Ingredient("Apple", 5),
          new Ingredient("Tomato", 4)
        ];
        this.addIngredients(temp);
    }

    get ingredients() {
        return this._ingredients;
    }

    addIngredient(ing: Ingredient) {
        let ingredent = this.ingredients.find(i=>i.name == ing.name);
        if(ingredent) {
          ingredent.amount = ingredent.amount + ing.amount;
        }else {
          this._ingredients.push(ing);
        }
    }

    addIngredients(ings: Ingredient[]) {
     for (const ing of ings) {
       this.addIngredient(ing);
      }     
    }
}