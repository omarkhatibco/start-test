import { progressAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import { fieldLabelStyle } from '../Field/style'

export const style = sva({
	slots: progressAnatomy.keys(),
	base: {
		root: {
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			gap: '2',
			width: 'full',
		},
		label: fieldLabelStyle,
		valueText: {
			fontSize: 'sm',
		},

		track: {
			position: 'relative',
			bgColor: 'default.300/50',
			height: '1',
			borderRadius: 'full',
			overflow: 'hidden',
			width: '100%',

			_before: {
				position: 'absolute',
				rounded: 'full',
				start: '0',
				insetY: '0',
				width: 'auto',
				bgColor: 'primary',
				animation: 'indeterminate1',
			},
			_after: {
				position: 'absolute',
				rounded: 'full',
				start: '0',
				insetY: '0',
				width: 'auto',
				bgColor: 'primary',
				animation: 'indeterminate2',
			},
			_indeterminate: {
				_before: {
					content: "''",
				},
				_after: {
					content: "''",
				},
			},
		},
		range: {
			bgColor: 'primary',
			height: '100%',
			rounded: 'full',
			transition: 'width 0.2s ease-in-out',
			'--translate-x': '-100%',

			_indeterminate: {
				display: 'none',
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
