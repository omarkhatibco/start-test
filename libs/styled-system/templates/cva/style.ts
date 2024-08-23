import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {},
})
type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
