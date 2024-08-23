import { selectAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'
import type { SystemStyleObject } from '@mando/styled-system/types'

import {
	contentStyle,
	itemGroupLabelStyle,
	itemGroupStyle,
	itemStyle,
	positionerStyle,
} from '../Menu/style'

import {
	fieldControlAffixStyle,
	fieldControlStyle,
	fieldLabelStyle,
	fieldRootStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const valueTextStyle = {
	flexGrow: 1,
	alignSelf: 'center',
	textAlign: 'start',
	fontSize: 'var(--field-font-size)',
} satisfies SystemStyleObject

export const selectItemIndicatorStyle = {
	// color: 'fg.brand.primary',
	ms: 'auto',
} satisfies SystemStyleObject

export const style = sva({
	slots: selectAnatomy.keys(),
	base: {
		root: fieldRootStyle,
		label: fieldLabelStyle,
		trigger: {
			...fieldControlStyle,
			cursor: 'pointer',

			_placeholderShown: {
				color: 'foreground.500',
			},

			_open: {
				bgColor: 'default.200',
				borderColor: 'default.200',
			},
		},
		valueText: valueTextStyle,
		indicator: fieldControlAffixStyle,
		clearTrigger: {
			...fieldControlAffixStyle,
			_svg: {
				w: 'calc(var(--field-icon-size) - 0.25rem)',
				h: 'calc(var(--field-icon-size) - 0.25rem)',
			},
			cursor: 'pointer',
		},

		itemGroupLabel: itemGroupLabelStyle,
		content: {
			...contentStyle,
			width: 'var(--reference-width)',
		},
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
