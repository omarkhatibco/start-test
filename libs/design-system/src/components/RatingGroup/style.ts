import { ratingGroupAnatomy } from '@ark-ui/react'
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
	slots: ratingGroupAnatomy.keys(),
	base: {
		root: {
			...fieldRootStyle,
		},
		label: fieldLabelStyle,
		control: {
			display: 'flex',
			gap: '0',
		},
		item: {
			cursor: 'pointer',
			color: 'default',
			// fontSize: '24',

			_highlighted: {
				color: 'primary',
			},

			_disabled: {
				opacity: 'disabled',
				pointerEvents: 'none',
			},
		},
	},
	variants: {
		size: {
			sm: {
				root: smRootStyle,
				item: {
					_svg: {
						width: 4,
						height: 4,
					},
				},
			},
			md: {
				root: mdRootStyle,
				item: {
					_svg: {
						width: 5,
						height: 5,
					},
				},
			},
			lg: {
				root: lgRootStyle,
				item: {
					_svg: {
						width: 6,
						height: 6,
					},
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
