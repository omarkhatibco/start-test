import { toggleGroupAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: toggleGroupAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			overflow: 'hidden',
			position: 'relative',
			rounded: 'md',
			shadow: 'xs',

			_vertical: {
				flexDirection: 'column',
			},
		},
		item: {
			position: 'relative',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',

			appearance: 'none',
			userSelect: 'none',
			verticalAlign: 'middle',
			whiteSpace: 'nowrap',
			cursor: 'pointer',
			bgColor: 'default.50',
			fontSize: 'sm',
			px: 4,
			py: 2,
			gap: 2,

			h: 10,
			minW: 10,

			transition: 'all',

			_first: {
				_horizontal: {
					roundedStart: 'md',
				},
				_vertical: {
					roundedTop: 'md',
				},
			},
			_last: {
				_horizontal: {
					roundedEnd: 'md',
				},
				_vertical: {
					roundedBottom: 'md',
				},
			},
			_svg: {
				w: 5,
				h: 5,
			},

			_hover: {
				opacity: 'hover',
			},

			_on: {
				bgColor: 'default.100',
			},

			_disabled: {
				opacity: 'disabled',
				pointerEvents: 'none',
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
