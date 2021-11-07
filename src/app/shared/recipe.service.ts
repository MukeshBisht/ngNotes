import { Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    private _recipes : Recipe[];

    get recipes() {
       return this._recipes; 
    }

    constructor(){
        this._recipes = [];

        let r = new Recipe("test", "test recipe", "https://images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg");
        r.addIngredient(new Ingredient("Paper", 5));
        r.addIngredient(new Ingredient("Jam", 8));

        this._recipes.push(r);
    }
}