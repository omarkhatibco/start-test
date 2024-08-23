import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		color: 'blue.500',

		cursor: 'pointer',
		gap: '1',

		transition: 'all',

		textUnderlineOffset: '0.125em',

		textDecorationThickness: 1,

		_hover: {
			textDecorationLine: 'underline',
		},
		_svg: {
			width: '1em',
			height: '1em',
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
