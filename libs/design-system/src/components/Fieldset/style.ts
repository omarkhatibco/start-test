import { fieldsetAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'
import type { SystemStyleObject } from '@mando/styled-system/types'

import {
	fieldErrorTextStyle,
	fieldHelperTextStyle,
	fieldLabelStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: fieldsetAnatomy.keys(),
	base: {
		root: {},
		legend: {
			...fieldLabelStyle,
			fontWeight: 'black',
		},
		helperText: fieldHelperTextStyle,
		errorText: fieldErrorTextStyle,
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
