import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {
		insetBlockStart: 1,
		insetInlineEnd: 1,
		p: 2,

		appearance: 'none',
		userSelect: 'none',
		cursor: 'pointer',

		rounded: 'full',
		transition: 'all',

		_hover: {
			bgColor: 'default.100',
		},
	},

	variants: {
		inOverlay: {
			true: {
				pos: 'absolute',
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
