/**
 * Represents an ingredient in a recipe
 * @constructor
 * @param {string} name - The name of the ingredient
 * @param {number} amount - The amount of an ingredient
 * @param {string} unit - The unit of the amount ('krm', 'tsk', 'msk', 'ml', 'cl', 'dl', 'l', 'g', 'hg', 'kg')
 * @example <caption>Example of creating a new ingredient</caption>
 * new Ingredient('milk', 1, 'dl')
 */

export class Ingredient {
  private name: string;
  private amount: number;
  private unit: string;

  constructor(name: string, amount: number, unit: string) {
    this.name = name;
    this.amount = amount;
    this.unit = unit;
  }
  
}