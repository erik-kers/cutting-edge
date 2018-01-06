import { Ingredient } from "./../resources/helpers/ingredient";
import { Instruction } from "./../resources/helpers/instruction";
import { Recipe } from "resources/helpers/recipe";

export class NewRecipe {
  private title: string;
  private description: string;
  private time: string;
  private date: Date;
  private imagePath: string;
  private course: string;
  private tags: string[];
  private extra: string;
  private instruction: Instruction;
  private ingredient: Ingredient;
  private ingredientList: Ingredient[] = [];
  private instructionList: Instruction[] = [];
  private recipe: Recipe;

  constructor() {
    this.title = '',
    this.description = '',
    this.time = '',
    this.date = new Date();
    this.imagePath = '';
    this.course = '';
    this.tags = [];
    this.extra = '';
  }
  
  public saveRecipe(title, description, time, date, imagePath, course, tags, extra): void {
    console.log(this.recipe);
  }
}