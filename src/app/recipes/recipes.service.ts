import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('Another Test recipe', 'This is another test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
      ];

      getRecipes() {
        return this.recipes.slice(); //slice means we cannot access the array from outside this class - we get a copy 
      }
}