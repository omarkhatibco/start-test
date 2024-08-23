import { switchAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	fieldLabelStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: switchAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			position: 'relative',
			alignItems: 'flex-start',
			gap: 2,
			cursor: 'pointer',
		},
		label: fieldLabelStyle,
		control: {
			display: 'inline-flex',
			cursor: 'pointer',
			alignItems: 'center',
			flexShrink: 0,
			rounded: 'full',

			transition: 'all',
			mt: 0.5,
			p: 0.5,

			_focus: {
				ringWidth: '2',
				ringOffset: '1',
				outlineStyle: 'solid',
			},

			bgColor: 'default',
			shadow: 'xs',

			_checked: {
				bgColor: 'primary',
			},

			_hover: {
				opacity: 'hover',
			},

			_disabled: {
				opacity: 'disabled',
			},

			_invalid: {
				bgColor: 'error.500',
			},
		},

		thumb: {
			rounded: 'full',

			bgColor: 'white',
			transition: 'all',
			translateX: '0',
			translate: 'auto',
			shadow: 'sm',

			w: 4,
			h: 4,

			_checked: {
				translateX: '100%',
			},

			_disabled: {
				opacity: 'disabled',
			},
		},
	},
	variants: {
		size: {
			sm: {
				root: smRootStyle,

				control: {
					w: 9,
				},
				thumb: {
					width: 4,
					height: 4,
				},
			},
			md: {
				root: mdRootStyle,
				control: {
					w: 11,
				},
				thumb: {
					width: 5,
					height: 5,
				},
			},
			lg: {
				root: lgRootStyle,
				control: {
					w: '3.25rem',
				},
				thumb: {
					width: 6,
					height: 6,
				},
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
