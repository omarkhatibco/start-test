import { signaturePadAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	fieldLabelStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: signaturePadAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: '2',
			width: 'full',
		},
		label: fieldLabelStyle,
		control: {
			position: 'relative',
			minWidth: 0,

			cursor: 'crosshair',
			transition: 'all',

			rounded: 'var(--field-border-radius)',
			bgColor: 'default.100',
			shadow: 'xs',

			_hover: {
				bgColor: 'default.200',
			},

			_disabled: {
				opacity: 'disabled',
				pointerEvents: 'none',
			},
		},
		clearTrigger: {
			position: 'absolute',
			end: 0,
			top: 0,
			px: 2,
			py: 2,
			_svg: {
				w: 'var(--field-icon-size)',
				h: 'var(--field-icon-size)',
			},
			color: 'default.500',
			cursor: 'pointer',
		},
		guide: {
			position: 'absolute',
			insetX: 6,
			bottom: 6,
			borderStyle: 'dashed',
			borderWidth: 1,
		},
	},
	defaultVariants: {
		size: 'md',
	},
	variants: {
		size: {
			sm: {
				root: smRootStyle,
				control: {
					minHeight: 44,
				},
			},
			md: {
				root: mdRootStyle,
				control: {
					minHeight: 52,
				},
			},
			lg: {
				root: lgRootStyle,
				control: {
					minHeight: 60,
				},
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
