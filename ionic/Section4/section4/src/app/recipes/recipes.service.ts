import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [{
    id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://images.smulweb.nl/recepten/201311/1418556/high_res/schnitzel3.jpg',
    ingredients: ['French Fries', 'Pork Meat', 'Salad']
  },
  {
    id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://images.vrt.be/dako2017_1600s_j75/2018/04/09/8f0c4a18-3bd5-11e8-abcc-02b7b76bf47f.jpg',
    ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
  },
];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(r => r.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(r => r.id !== recipeId);
  }
}
