import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: ['root', 'type', 'content'],
	base: {
		root: {
			position: 'relative',
			userSelect: 'none',
			appearance: 'none',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			px: 1,
			py: 1,

			whiteSpace: 'nowrap',
			verticalAlign: 'middle',

			cursor: 'pointer',
			transition: 'all',

			borderWidth: '1px',
			bgColor: 'colorPalette.100',
			borderColor: 'colorPalette.200',
			shadow: 'xs',
			color: 'foreground',

			fontWeight: 'medium',
			lineHeight: '1',
			rounded: 'full',

			_hover: {
				bgColor: 'colorPalette.200',
				borderColor: 'colorPalette.500',
			},

			_children: {
				transition: 'all',
			},

			_svg: {
				fontSize: '16',
				color: 'colorPalette.500',
			},

			_active: {
				translateY: '1px',
			},

			_disabled: {
				pointerEvents: 'none',
				opacity: 'disabled',
			},

			_hidden: {
				display: 'none',
			},
		},
		type: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			rounded: 'full',
			px: 2,
			py: 0.5,
			gap: 1,
			borderColor: 'colorPalette.500',
			borderWidth: '1px',
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'solid',
	},
	variants: {
		variant: {
			solid: {},
			outline: {
				root: {
					bgColor: 'transparent',
					_hover: {
						bgColor: 'transparent',
					},
				},
			},
		},
		size: {
			sm: {
				root: {
					gap: 2,
					fontSize: 'sm',
				},
			},
			md: {
				root: {
					gap: 2,
					fontSize: 'sm',
				},
			},
			lg: {
				root: {
					gap: 3,
					fontSize: 'md',
				},
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
