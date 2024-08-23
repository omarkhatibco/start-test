import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {
		backgroundClip: 'padding-box',
		animation: 'pulse',
		bgColor: 'content3',
		color: 'transparent',
		cursor: 'default',
		pointerEvents: 'none',
		userSelect: 'none',
		rounded: 'md',
		'&::before, &::after, *': {
			visibility: 'hidden',
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
