import { radioGroupAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	fieldLabelStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: radioGroupAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			gap: 2,
			flexDirection: {
				_vertical: 'column',
				_horizontal: 'row',
			},
		},
		label: fieldLabelStyle,
		item: {
			display: 'flex',
			position: 'relative',
			alignItems: 'flex-start',
			gap: 3,
			cursor: 'pointer',
			p: 4,
			borderWidth: 2,
			transition: 'all',

			rounded: 'var(--field-border-radius)',
			fontSize: 'var(--field-font-size)',

			_hover: {
				opacity: 'hover',
			},

			_checked: {
				borderColor: 'primary',
			},

			_focus: {
				ringWidth: '2',
				ringOffset: '1',
				outlineStyle: 'solid',
			},

			_disabled: {
				cursor: 'not-allowed',
				pointerEvents: 'none',
				opacity: 'disabled',
			},

			_invalid: {
				borderColor: 'error.500',
			},
		},
		itemControl: {
			position: 'relative',
			mt: 0.5,
			bgColor: 'default',
			rounded: 'full',
			transition: 'all',

			_before: {
				content: '""',
				position: 'absolute',
				rounded: 'full',
				top: '50%',
				start: '50%',
				translate: '-50% -50%',
				width: '50%',
				height: '50%',
				bgColor: 'primary',
				opacity: 0,
			},
			outline: 'none',

			shadow: 'xs',

			_hover: {
				opacity: 'hover',
			},

			_checked: {
				_before: {
					opacity: 1,
				},
			},
			_indeterminate: {},

			_focus: {
				outline: 'none',
			},

			_disabled: {
				opacity: 'disabled',
			},

			_invalid: {
				bgColor: 'error.500',
			},
		},
	},
	variants: {
		size: {
			sm: {
				root: smRootStyle,
				itemControl: {
					width: 4,
					height: 4,
				},
			},
			md: {
				root: mdRootStyle,
				itemControl: {
					width: 5,
					height: 5,
				},
			},
			lg: {
				root: lgRootStyle,
				itemControl: {
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
