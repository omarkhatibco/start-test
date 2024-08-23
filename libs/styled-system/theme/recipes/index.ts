import type {
	RecipeConfig,
	RecipeVariantRecord,
	SlotRecipeConfig,
} from '@pandacss/dev'

export const recipes: Record<
	string,
	Partial<RecipeConfig<RecipeVariantRecord>>
> = {}

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {}
