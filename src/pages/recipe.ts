import { inject } from 'aurelia-framework';
import { MdToastService, MdModal } from 'aurelia-materialize-bridge';

@inject(MdToastService)
export class Recipe {
  toast: MdToastService;

  constructor(toast) {
    this.toast = toast;
  }
  
  public saveRecipe(): void {
    this.toast.show("Sparat i kokboken", 1000, 'rounded black');
  }
}
