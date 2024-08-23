import { tagsInputAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	fieldControlStyle,
	fieldInputStyle,
	fieldLabelStyle,
	fieldRootStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: tagsInputAnatomy.keys(),
	base: {
		root: fieldRootStyle,
		label: fieldLabelStyle,
		control: {
			...fieldControlStyle,
			flexWrap: 'wrap',
			py: 2,
		},
		input: {
			...fieldInputStyle,
			flexGrow: 0,
			w: 'auto',
			py: 0,
		},

		itemPreview: {
			display: 'inline-flex',
			alignItems: 'center',

			bgColor: 'content1',
			fontSize: 'var(--field-font-size)',
			rounded: 'var(--field-border-radius)',
			px: 1,
			py: 0.5,
			gap: 1,

			fontWeight: 'medium',

			_hidden: {
				display: 'none',
			},
		},

		itemDeleteTrigger: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			rounded: 'full',
			color: 'default.500',
			cursor: 'pointer',

			_svg: {
				w: 'var(--field-icon-size)',
				h: 'var(--field-icon-size)',
			},
		},

		itemInput: {
			background: 'transparent',
			outline: 'none',
			fontSize: 'var(--field-font-size)',
		},
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
	defaultVariants: {
		size: 'md',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
