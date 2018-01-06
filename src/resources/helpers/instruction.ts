/**
 * Represents an instruction in a recipe
 * @constructor
 * @param {number} step - Number corresponding to the step in the instructyion
 * @param {string} body - The text description of the instruction
 * @example <caption>Example of creating a new instruction</caption>
 * new Ingredient('1', 'Koka upp lättsaltat vatten')
 */

export class Instruction {
  private step: number;
  private body: string;

  constructor(step: number, body: string) {
    this.step = step;
    this.body = body;
  }
  
}