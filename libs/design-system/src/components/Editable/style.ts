import { editableAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import { fieldLabelStyle, fieldRootStyle } from '../Field/style'

export const style = sva({
	slots: editableAnatomy.keys(),
	base: {
		root: fieldRootStyle,
		label: fieldLabelStyle,
		control: {
			display: 'flex',
			gap: '2',
		},
		input: {
			width: 'full',

			px: 1,

			fontSize: 'var(--field-font-size)',
			bgColor: 'default.100',
			shadow: 'xs',
			transition: 'all',

			_hover: {
				bgColor: 'default.200',
			},

			rounded: 'md',
			outline: 'none',

			_disabled: {
				opacity: 'disabled',
				pointerEvents: 'none',
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
