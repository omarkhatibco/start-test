import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',

		rounded: 'full',

		colorPalette: 'volcan',
		fontWeight: 'medium',
		lineHeight: 1,

		userSelect: 'none',
		whiteSpace: 'nowrap',

		_svg: {
			fontSize: 12,
		},
	},
	defaultVariants: {
		size: 'md',
	},
	variants: {
		size: {
			sm: {
				px: 2,
				h: 5.5,
				minW: 5.5,
				gap: 1,
			},
			md: {
				px: 2.5,
				h: 6,
				minW: 6,
				gap: 1.5,
			},
			lg: {
				px: 3,
				h: 7,
				minW: 7,
				gap: 1.5,
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
