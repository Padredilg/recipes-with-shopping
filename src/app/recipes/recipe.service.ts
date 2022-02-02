import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Big Mac', 
            'Mcdonalds Bigmac sandwich for your fat needs', 
            'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-mobile?wid=768&hei=441&dpr=off', 
            [
                new Ingredient('hamburgers', 2),
                new Ingredient('shreaded lettuce', 1),
                new Ingredient('american cheese slice', 2),
                new Ingredient('BigMac Sauce', 1),
                new Ingredient('Diced Onion', 1),
                new Ingredient('Sliced pickles', 4),
                new Ingredient('Bread with gergelim', 2),

            ]
        ),
        new Recipe(
            'Cup of coke', 
            'learn how to prepare a cup of coke', 
            'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:product-header-mobile?wid=768&hei=441&dpr=off',
            [
                new Ingredient('Coke Bottle', 1),
                new Ingredient('Cup', 1)
            ]
        ),
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}