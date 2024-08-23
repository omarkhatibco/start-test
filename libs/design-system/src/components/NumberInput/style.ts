import { numberInputAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

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
	slots: numberInputAnatomy.keys(),
	base: {
		root: fieldRootStyle,
		label: fieldLabelStyle,

		control: fieldControlStyle,

		input: fieldInputStyle,

		decrementTrigger: fieldControlAffixStyle,
		incrementTrigger: fieldControlAffixStyle,
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
