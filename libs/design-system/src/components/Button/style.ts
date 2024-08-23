import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {
		position: 'relative',
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 'base',

		appearance: 'none',
		userSelect: 'none',
		whiteSpace: 'nowrap',
		verticalAlign: 'middle',
		overflow: 'hidden',

		cursor: 'pointer',
		transition: 'all',
		translate: 'auto',
		minW: 'max-content',

		colorPalette: 'default',
		fontWeight: 'medium',

		color: 'colorPalette.foreground',

		_children: {
			transition: 'all',
		},

		_active: {
			translateY: '1px',
		},

		_hover: {
			opacity: 'hover',
		},

		_disabled: {
			pointerEvents: 'none',
			opacity: 'disabled',
		},

		_loading: {
			pointerEvents: 'none',
		},
		_hidden: {
			display: 'none',
		},
	},

	variants: {
		pall: {
			default: {
				colorPalette: 'default',
			},
			primary: {
				colorPalette: 'primary',
			},
			success: {
				colorPalette: 'success',
			},
			error: {
				colorPalette: 'error',
			},
			warning: {
				colorPalette: 'warning',
			},
		},
		size: {
			sm: {
				px: 3,
				gap: 2,
				rounded: 'sm',
				height: 8,
				minW: '16',
				fontSize: 'xs',

				_svg: {
					w: 4,
					h: 4,
				},
			},
			md: {
				px: 4,
				gap: 2,
				rounded: 'md',
				height: 10,
				minW: '20',
				fontSize: 'sm',

				_svg: {
					w: 5,
					h: 5,
				},
			},
			lg: {
				px: 6,
				gap: 3,
				rounded: 'lg',
				height: 12,
				minW: '24',
				fontSize: 'md',

				_svg: {
					w: 6,
					h: 6,
				},
			},
		},
		iconOnly: {
			true: {
				px: 0,
			},
			false: {},
		},
		variant: {
			solid: {
				bgColor: 'colorPalette',
			},
			outline: {
				borderWidth: 'md',
				borderColor: 'colorPalette',
				color: 'colorPalette.900',
				_hover: {
					bgColor: 'colorPalette.100',
				},
			},
			ghost: {
				color: 'colorPalette.900',
				bgColor: 'transparent',
				_hover: {
					bgColor: 'colorPalette.100',
				},
			},
			link: {
				px: 0,
				py: 0,
				minW: 0,
				color: 'colorPalette.700',
				bgColor: 'transparent',
				_hover: {
					bgColor: 'transparent',
				},
			},
		},
	},
	compoundVariants: [
		{
			size: 'sm',
			iconOnly: true,
			css: {
				minW: '8',
			},
		},
		{
			size: 'md',
			iconOnly: true,
			css: {
				minW: '10',
			},
		},
		{
			size: 'lg',
			iconOnly: true,
			css: {
				minW: '12',
			},
		},
	],

	defaultVariants: {
		size: 'md',
		variant: 'solid',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
