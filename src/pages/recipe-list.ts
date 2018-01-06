import { inject } from 'aurelia-framework';
import { MdToastService, MdModal } from 'aurelia-materialize-bridge';
import { Api } from './../services/api';
import { Recipe } from './../resources/helpers/recipe';
import { NewRecipe } from 'pages/new-recipe';

@inject(MdToastService, Api)
export class RecipeList {
  recipeList: any[] = [];
  toast: MdToastService;
  api: Api;

  constructor(toast, api) {
    this.toast = toast;
    this.api = api;
    this.recipeList = [];
  }

  public activate(): any {
    this.api.get('recipes')
      .then((response) => {
        for(let i = 0; i < response.length; i++) {
          this.recipeList.push(response[i]);
        }
      })
    console.log('recipeList', this.recipeList);
  }

  public saveRecipe(): void {
    this.toast.show("Sparat i kokboken", 1000, 'rounded black');
  }
}
