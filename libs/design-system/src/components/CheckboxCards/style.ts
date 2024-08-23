import { checkboxAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	fieldLabelStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: checkboxAnatomy.keys(),
	base: {
		group: {
			display: 'flex',
			gap: 2,
		},
		root: {
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
		control: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '16',
			flexShrink: 0,
			mt: 0.5,

			color: 'foreground',

			bgColor: 'default',
			shadow: 'xs',

			_hover: {
				opacity: 'hover',
			},

			_checked: {},
			_indeterminate: {},

			_focus: {
				ringWidth: '2',
				ringOffset: '1',
				outlineStyle: 'solid',
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
				control: {
					width: 4,
					height: 4,
					rounded: '0.375rem',
				},
			},
			md: {
				root: mdRootStyle,
				control: {
					width: 5,
					height: 5,
					rounded: 'sm',
				},
			},
			lg: {
				root: lgRootStyle,
				control: {
					width: 6,
					height: 6,
					rounded: '0.6rem',
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
