import { treeViewAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: treeViewAnatomy.keys(),
	base: {
		root: {
			width: 'full',
			display: 'flex',
			flexDirection: 'column',
			gap: '4',
		},
		label: {
			fontSize: 'xs',
			color: 'foreground.500',
		},
		tree: {
			display: 'flex',
			flexDirection: 'column',
			gap: '2',
		},
		item: {
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			gap: 2,
			ps: 'calc((var(--depth) - 1) * 22px)',
			py: 1.5,
			rounded: 'sm',
			fontSize: 'sm',

			transition: 'all',
			cursor: 'pointer',

			_svg: {
				w: 5,
				h: 5,
				color: 'default.500',
				flexShrink: 0,
			},

			"&[data-depth='1']": {
				ps: '1',
				_selected: {
					_before: {
						bg: 'transparent',
					},
				},
			},
			_hover: {
				opacity: 'hover',
				bgColor: 'default.100',
			},

			_disabled: {
				pointerEvents: 'none',
				opacity: 'disabled',
			},

			_selected: {
				background: 'default.200',

				_before: {
					content: '""',
					position: 'absolute',
					left: '3',
					top: '0',
					width: '2px',
					height: 'full',
					bgColor: 'primary',
					zIndex: '1',
				},
			},
		},
		itemText: {
			truncate: true,
		},
		branchText: {
			truncate: true,
		},
		itemIndicator: {
			color: 'default.500',
			transformOrigin: 'center',
			transitionDuration: 'normal',
			transitionProperty: 'transform',
			transitionTimingFunction: 'default',
			_svg: {
				w: 5,
				h: 5,
				flexShrink: 0,
			},

			_open: {
				transform: 'rotate(90deg)',
			},
		},
		branch: {
			"&[data-depth='1'] > [data-part='branch-content']": {
				_before: {
					bg: 'divider',
					content: '""',
					height: 'full',
					left: '3',
					position: 'absolute',
					width: '1px',
					zIndex: '1',
				},
			},
		},
		branchContent: {
			position: 'relative',
		},
		branchControl: {
			display: 'flex',
			alignItems: 'center',
			gap: 2,
			ps: 'calc((var(--depth) - 1) * 22px)',
			py: '1.5',
			fontSize: 'sm',

			transition: 'all',
			cursor: 'pointer',
			rounded: 'sm',

			_svg: {
				w: 5,
				h: 5,
				color: 'default.500',
				flexShrink: 0,
			},

			"&[data-depth='1']": {
				ps: '1',
			},
			"&[data-depth='1'] > [data-part='branch-text'] ": {},

			_hover: {
				opacity: 'hover',
				bgColor: 'default.100',
			},

			_disabled: {
				pointerEvents: 'none',
				opacity: 'disabled',
			},
		},

		branchIndicator: {
			color: 'default.500',

			transition: 'all',
			_svg: {
				w: 5,
				h: 5,
			},

			_open: {
				transform: 'rotate(90deg)',
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
