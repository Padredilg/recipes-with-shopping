import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'),
        new Recipe('Another Test Recipe', 'This is simply another test', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'),
    ];

    getRecipes(){
        return this.recipes.slice();
    }

}