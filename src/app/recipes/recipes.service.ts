import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Schnitzel',
      imageUrl: 'https://www.fodmaprecept.nl/wp-content/uploads/2016/10/2015-10-20-18.31.12.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: '2',
      title: 'Spagetti',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuF0lroJvBw557A6WtMrvJvSttZDCILqjow&usqp=CAU',
      ingredients: ['Pasta', 'Tomato Sauce', 'Cheese']
    }

  ]

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
      return { ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId
    })
  }
}
