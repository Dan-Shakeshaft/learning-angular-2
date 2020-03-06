import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Test recipe', 
        'This is a test', 
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
        [new Ingredient('Meat', 1), new Ingredient('Cheese', 1)]),
        new Recipe(
          'Another Test recipe', 
          'This is another test', 
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
        [new Ingredient('Chicken', 2), new Ingredient('Tomatoes', 2)])
      ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice(); //slice means we cannot access the array from outside this class - we get a copy 
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}