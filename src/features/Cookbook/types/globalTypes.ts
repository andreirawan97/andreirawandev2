import { Consistency } from "../constants/recipe";

export interface Recipes {
  recipes: Recipe[];
}

export interface Recipe {
  license?: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: Recipe_ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image?: string;
  imageType?: string;
  summary: string;
  cuisines: any[];
  dishTypes: string[];
  diets: string[];
  occasions: any[];
  instructions: string;
  analyzedInstructions: Recipe_AnalyzedInstruction[];
  originalId: null;
  spoonacularSourceUrl: string;
  winePairing?: Record<string, unknown>;
}

export interface Recipe_AnalyzedInstruction {
  name: string;
  steps: Recipe_AnalyzedInstruction_Step[];
}

export interface Recipe_AnalyzedInstruction_Step {
  number: number;
  step: string;
  ingredients: Ent[];
  equipment: Ent[];
  length?: Unit;
}

export interface Ent {
  id: number;
  name: string;
  localizedName: string;
  image: string;
  temperature?: Unit;
}

export interface Unit {
  number: number;
  unit: string;
}

export interface Recipe_ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: Consistency;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Measures;
}

export interface Measures {
  us: Metric;
  metric: Metric;
}

export interface Metric {
  amount: number;
  unitShort: string;
  unitLong: string;
}
