import { pinInputAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	fieldLabelStyle,
	fieldRootStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: pinInputAnatomy.keys(),
	base: {
		root: fieldRootStyle,
		control: {
			display: 'flex',
			alignItems: 'center',
			gap: 2,

			_disabled: {
				pointerEvents: 'none',
			},
		},
		label: fieldLabelStyle,
		input: {
			textAlign: 'center',
			minH: 'var(--field-height)',
			w: 'var(--field-height)',
			rounded: 'var(--field-border-radius)',

			bgColor: 'default.100',
			shadow: 'xs',
			fontWeight: 'medium',
			fontSize: 'var(--field-font-size)',

			_placeholder: {
				color: 'foreground.500',
			},

			_invalid: {
				bgColor: 'error.100',
			},

			_disabled: {
				opacity: 'disabled',
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
	variants: {
		size: {
			sm: {
				root: smRootStyle,
			},
			md: {
				root: mdRootStyle,
			},
			lg: {
				root: lgRootStyle,
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
