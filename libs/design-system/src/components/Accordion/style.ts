import { accordionAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: accordionAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			w: 'full',
			divideY: '1px',
			borderTopWidth: '1px',
			borderBottomWidth: '1px',
		},
		itemTrigger: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			w: 'full',
			color: 'foreground',
			textAlign: 'start',
			fontSize: 'lg',
			cursor: 'pointer',
			userSelect: 'none',
			transition: 'all',
			zIndex: 'docked',
			py: 4,
			gap: 3,

			_disabled: {
				opacity: 'disabled',
				pointerEvents: 'none',
			},

			_hover: {
				opacity: 'hover',
			},
		},
		itemIndicator: {
			color: 'default.500',
			transition: 'all',

			_svg: {
				width: 5,
				height: 5,
			},

			_open: {
				rotate: 'auto',
				rotateX: '180deg',
			},
		},
		itemContent: {
			overflow: 'hidden',

			py: 2,

			transition: 'all',

			_open: {
				animation: 'collapse-in',
			},
			_closed: {
				animation: 'collapse-out',
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
