import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: ['root', 'item', 'indicator', 'label', 'itemText', 'itemControl'],
	// slots: segmentGroupAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			flexShrink: '0',
			alignSelf: 'flex-start',
			gap: 1,
			p: 1,

			_horizontal: {
				flexDirection: 'row',
			},
			_vertical: {
				flexDirection: 'column',
			},

			position: 'relative',
			scrollbarWidth: 'none',
			overflowX: 'auto',
			maxWidth: 'full',

			rounded: 'md',

			'&::-webkit-scrollbar': {
				display: 'none',
			},
		},
		item: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexShrink: '0',
			gap: 0,
			px: 3,
			py: 1,

			whiteSpace: 'nowrap',
			zIndex: '1',

			cursor: 'pointer',
			color: 'default.500',
			transition: 'all',

			_hover: {
				opacity: 'hover',
			},

			_disabled: {
				pointerEvents: 'none',
				cursor: 'not-allowed',
				opacity: 'disabled',
			},

			_checked: {
				color: 'default.foreground',
			},

			_vertical: {
				justifyContent: 'flex-start',
			},
		},
	},

	variants: {
		size: {
			sm: {
				item: {
					fontSize: 'xs',
				},
			},
			md: {
				item: {
					fontSize: 'sm',
				},
			},
			lg: {
				item: {
					fontSize: 'md',
				},
			},
		},
		variant: {
			solid: {
				root: {
					p: 1,
					bgColor: 'default.100',
				},
				indicator: {
					bgColor: 'background',
					rounded: 'sm',
					shadow: 'sm',
					width: 'var(--width)',
					height: 'var(--height)',
				},
			},
			underlined: {
				root: {
					rounded: 'none',
				},
				indicator: {
					bgColor: 'default.foreground',
					_horizontal: {
						width: 'var(--width)',
						height: '2px',
						insetBlockEnd: '0',
					},
					_vertical: {
						height: 'var(--height)',
						width: '2px',
						start: '0',
					},
				},
			},
			bordered: {
				root: {
					borderWidth: 'md',
					borderColor: 'default.200',
				},
				indicator: {
					bgColor: 'background',
					rounded: 'sm',
					shadow: 'sm',
					width: 'var(--width)',
					height: 'var(--height)',
				},
			},
			ghost: {
				indicator: {
					bgColor: 'background',
					rounded: 'sm',
					shadow: 'sm',
					width: 'var(--width)',
					height: 'var(--height)',
				},
			},
		},
	},

	defaultVariants: {
		size: 'md',
		variant: 'solid',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
