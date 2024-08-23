import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {
		alignItems: 'center',
		bg: 'bg.subtle',
		display: 'inline-flex',
		fontFamily: 'mono',
		whiteSpace: 'pre',
		px: 2,
		py: 1,
		height: 'fit-content',
		fontSize: 'sm',
		bgColor: 'default/40',
		color: 'default.foreground',
		rounded: 'sm',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
