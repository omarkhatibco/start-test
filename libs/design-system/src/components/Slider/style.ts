import { sliderAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	fieldLabelStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: sliderAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: '1',
			width: 'full',
		},
		label: fieldLabelStyle,

		control: {
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			height: '6',
		},
		track: {
			bgColor: 'default.300/50',
			rounded: 'full',
			overflow: 'hidden',
			flex: '1',
		},
		range: {
			bgColor: 'primary',
			height: 'full',
		},
		thumb: {
			bgColor: 'background',
			borderColor: 'foreground',
			rounded: 'full',
			borderWidth: '2px',
			boxShadow: 'sm',
			zIndex: '1',
			shadow: 'md',
		},

		valueText: {
			...fieldLabelStyle,
			fontWeight: 'medium',
		},

		markerGroup: {
			mt: '-1',
		},

		marker: {
			_before: {
				bgColor: 'foreground',
				borderRadius: 'full',
				content: "''",
				display: 'block',
				left: '50%',
				position: 'relative',
				transform: 'translateX(-50%)',
				rounded: 'full',
				height: '1',
				top: '-3.5',
				width: '1',
			},
		},
	},

	variants: {
		size: {
			sm: {
				root: smRootStyle,
				track: {
					height: 1,
				},
				thumb: {
					height: 5,
					width: 5,
				},
			},
			md: {
				root: mdRootStyle,
				track: {
					height: 3,
				},
				thumb: {
					height: 6,
					width: 6,
				},
			},
			lg: {
				root: lgRootStyle,
				track: {
					height: 5,
				},
				thumb: {
					height: 6,
					width: 6,
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
