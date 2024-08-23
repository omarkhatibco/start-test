import { colorPickerAnatomy } from '@ark-ui/react'
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

import { prevTriggerStyle } from '../DatePicker/style'
import { valueTextStyle } from '../Select/style'

export const style = sva({
	slots: colorPickerAnatomy.keys(),
	base: {
		root: fieldRootStyle,
		label: fieldLabelStyle,
		control: fieldControlStyle,

		valueText: valueTextStyle,

		trigger: fieldControlAffixStyle,

		content: {
			display: 'flex',
			flexDirection: 'column',
			zIndex: 'dropdown',

			px: 3,
			py: 3,

			rounded: 'lg',
			bgColor: 'content1',
			color: 'content1.foreground',

			boxShadow: 'md',

			gap: 4,
			maxWidth: 'sm',
			minW: '64',

			_open: {
				animation: 'fade-in',
			},
			_closed: {
				animation: 'fade-out',
			},
			_hidden: {
				display: 'none',
			},
		},

		formatTrigger: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			w: 'auto',
			flexGrow: 1,
			h: 9,
			rounded: 'md',

			color: 'primary',
			bgColor: 'default',
			cursor: 'pointer',
			transition: 'all',

			_hover: {
				opacity: 'hover',
			},

			textStyle: 'text.md',
			fontWeight: 'semibold',
		},

		formatSelect: {
			w: 'full',
			h: 10,
			bgColor: 'default.100',
			rounded: 'var(--field-border-radius)',
			px: 3,
			height: 'var(--field-height)',
			fontSize: 'var(--field-font-size)',
			transition: 'all',
			cursor: 'pointer',

			_hover: {
				bgColor: 'default.200',
			},

			_focus: {
				bgColor: 'default.200',
			},
		},

		area: {
			height: '36',
			rounded: 'md',
			overflow: 'hidden',
		},
		areaThumb: {
			borderRadius: 'full',
			height: '2.5',
			width: '2.5',
			boxShadow: 'white 0px 0px 0px 2px, black 0px 0px 2px 1px',
		},
		areaBackground: {
			height: 'full',
		},

		//

		channelSlider: {
			w: 'full',
		},
		channelSliderTrack: {
			height: '3',
			rounded: 'md',
		},
		channelSliderThumb: {
			borderRadius: 'full',
			height: '2.5',
			width: '2.5',
			boxShadow: 'white 0px 0px 0px 2px, black 0px 0px 2px 1px',
			transform: 'translate(-50%, -50%)',
		},
		transparencyGrid: {
			rounded: 'md',
		},

		view: {
			display: 'flex',
			gap: 1,

			'& input': {
				bgColor: 'default.100',
				rounded: 'var(--field-border-radius)',
				px: 3,
				height: 'var(--field-height)',
				fontSize: 'var(--field-font-size)',

				_hover: {
					bgColor: 'default.200',
				},
			},
		},

		channelInput: {
			...fieldInputStyle,
		},

		swatchGroup: {
			display: 'grid',
			gridTemplateColumns: 'repeat(7, 1fr)',
			gap: '2',
		},
		swatch: {
			height: '6',
			width: '6',
			rounded: 'md',
			boxShadow:
				'0 0 0 1px {colors.content2}, 0 0 0 2px {colors.content2} inset',
		},
		swatchIndicator: {
			w: 'full',
			h: 'full',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'white',
		},

		eyeDropperTrigger: prevTriggerStyle,
	},
	defaultVariants: {
		size: 'md',
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
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
