import { Ingredient } from "resources/helpers/ingredient";
import { Instruction } from "resources/helpers/instruction";

export class Recipe {
  constructor(
    private title: string, 
    private description: string, 
    private time: string, 
    private date: Date, 
    private imagePath: string, 
    private course: string, 
    private tags: string[],
    private ingredientList: Ingredient[] = [], 
    private instructionList: Instruction[] = [], 
    private extra: string
  ) {}
}

