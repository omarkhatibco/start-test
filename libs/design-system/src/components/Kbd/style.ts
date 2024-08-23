import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {
		// textStyle: 'text.xs',
		// color: 'text.quaternary',
		px: 1.5,
		py: 0.5,
		display: 'inline-flex',
		gap: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 'sm',
		shadow: 'sm',
		bg: 'default.100',
		color: 'foreground.600',
		rounded: 'sm',
		transition: 'all',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
