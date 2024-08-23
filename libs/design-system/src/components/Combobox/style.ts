import { comboboxAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	contentStyle,
	itemGroupLabelStyle,
	itemGroupStyle,
	itemStyle,
	positionerStyle,
} from '../Menu/style'
import { selectItemIndicatorStyle } from '../Select/style'

import {
	fieldControlAffixStyle,
	fieldControlStyle,
	fieldInputStyle,
	fieldLabelStyle,
	fieldRootStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: comboboxAnatomy.keys(),
	base: {
		root: fieldRootStyle,
		control: fieldControlStyle,
		label: fieldLabelStyle,

		trigger: fieldControlAffixStyle,
		clearTrigger: {
			...fieldControlAffixStyle,
			_svg: {
				w: 'calc(var(--field-icon-size) - 0.25rem)',
				h: 'calc(var(--field-icon-size) - 0.25rem)',
			},
			cursor: 'pointer',
		},

		input: fieldInputStyle,

		itemGroupLabel: itemGroupLabelStyle,
		content: { ...contentStyle, width: 'var(--reference-width)' },
		itemGroup: itemGroupStyle,
		positioner: positionerStyle,
		item: itemStyle,
		itemIndicator: selectItemIndicatorStyle,
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
