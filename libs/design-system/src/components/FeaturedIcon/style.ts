import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		rounded: 'full',
		bgColor: 'colorPalette.100',
		color: 'colorPalette.500',
	},
	variants: {
		palette: {
			brand: {
				colorPalette: 'primary',
				color: 'primary',
			},
			error: {
				colorPalette: 'error',
			},
			warning: {
				colorPalette: 'warning',
			},
			success: {
				colorPalette: 'success',
			},
			default: {
				colorPalette: 'default',
			},
		},
		size: {
			sm: {
				w: 8,
				h: 8,
				fontSize: 'xl',
			},
			md: {
				w: 10,
				h: 10,
				fontSize: '2xl',
			},
			lg: {
				w: 12,
				h: 12,
				fontSize: '3xl',
			},

			xl: {
				w: 14,
				h: 14,
				fontSize: '4xl',
			},
		},
	},

	defaultVariants: {
		size: 'md',
		palette: 'brand',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
