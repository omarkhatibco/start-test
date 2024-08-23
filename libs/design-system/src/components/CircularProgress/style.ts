import { progressAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	fieldLabelStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

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
		label: {},
		valueText: {},

		track: {
			bgColor: 'default.300/50',
			height: '2',
			borderRadius: 'full',
			overflow: 'hidden',
			width: '100%',
		},
		range: {
			bgColor: 'primary',
			height: '100%',
			borderRadius: 'full',
			transition: 'width 0.2s ease-in-out',
			'--translate-x': '-100%',
		},
		circle: {},
		circleTrack: {
			stroke: 'default.300/50',
		},
		circleRange: {
			stroke: 'primary',
			transitionProperty: 'stroke-dasharray, stroke',
			transitionDuration: '0.6s',
			strokeLinecap: 'round',

			_indeterminate: {
				animation: 'spinner',
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
	variants: {
		size: {
			sm: {
				label: {
					fontSize: 'sm',
				},
				valueText: {
					fontSize: '0.5rem',
				},
				circle: {
					'--size': 'sizes.8',
					'--thickness': 'sizes.0.5',
				},
				circleRange: {
					_indeterminate: {
						strokeDasharray: '38',
					},
				},
			},
			md: {
				label: {
					fontSize: 'sm',
				},
				valueText: {
					fontSize: '0.55rem',
				},
				circle: {
					'--size': 'sizes.10',
					'--thickness': 'sizes.1',
				},
				circleRange: {
					_indeterminate: {
						strokeDasharray: '48',
					},
				},
			},
			lg: {
				label: {
					fontSize: 'md',
				},
				valueText: {
					fontSize: '0.6rem',
				},
				circle: {
					'--size': 'sizes.12',
					'--thickness': 'sizes.1.5',
				},
				circleRange: {
					_indeterminate: {
						strokeDasharray: '52',
					},
				},
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
