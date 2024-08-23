import { datePickerAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'
import type { SystemStyleObject } from '@mando/styled-system/types'

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

const yearSelectStyle = {
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

	_disabled: {
		opacity: 'disabled',
	},
} satisfies SystemStyleObject

export const prevTriggerStyle = {
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	w: 9,
	h: 9,
	rounded: 'full',
	backgroundColor: 'default',
	transition: 'all',

	cursor: 'pointer',

	_hover: {
		opacity: 'hover',
	},
} satisfies SystemStyleObject

export const style = sva({
	slots: datePickerAnatomy.keys(),
	base: {
		root: fieldRootStyle,
		label: fieldLabelStyle,
		control: fieldControlStyle,
		input: fieldInputStyle,
		trigger: {
			...fieldControlAffixStyle,
			cursor: 'pointer',
			_svg: {
				w: 'calc(var(--field-icon-size) - 0.25rem)',
				h: 'calc(var(--field-icon-size) - 0.25rem)',
			},
		},
		clearTrigger: { ...fieldControlAffixStyle, cursor: 'pointer' },

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

		yearSelect: yearSelectStyle,
		monthSelect: yearSelectStyle,

		view: {
			display: 'flex',
			flexDirection: 'column',
			gap: 3,
			_hidden: {
				display: 'none',
			},
		},

		viewControl: {
			display: 'flex',
			gap: '2',
			justifyContent: 'space-between',
		},
		prevTrigger: prevTriggerStyle,
		nextTrigger: prevTriggerStyle,
		viewTrigger: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			w: 'auto',
			flexGrow: 1,
			h: 9,
			px: 1,
			rounded: 'md',

			bgColor: 'default',
			cursor: 'pointer',
			transition: 'all',

			_hover: {
				opacity: 'hover',
			},

			fontWeight: 'semibold',
		},

		table: {
			width: 'full',
			borderCollapse: 'collapse',
		},

		tableHeader: {
			fontSize: 'sm',
			fontWeight: 'semibold',
			color: 'default.500',
			w: 10,
			h: 10,
		},

		tableCell: {
			textAlign: 'center',
		},

		tableCellTrigger: {
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			h: 10,
			cursor: 'pointer',
			zIndex: '1',

			fontSize: 'sm',
			transition: 'background',

			rounded: 'full',

			_before: {
				content: '""',
				position: 'absolute',
				inset: 0,
				bgColor: 'transparent',
				rounded: 'full',
				zIndex: '-1',
				transition: 'background',
			},

			'&[data-view="month"],&[data-view="year"]': {
				rounded: 'md',
				_before: {
					rounded: 'md',
				},
			},

			_hover: {
				bgColor: 'default.200',
			},

			_disabled: {
				opacity: 'disabled',
				pointerEvents: 'none',
			},

			_today: {
				_after: {
					content: "'•'",
					position: 'absolute',
					marginTop: '6',
				},
			},

			_selected: {
				color: 'primary.foreground',
				_before: {
					bgColor: 'primary',
				},
			},

			'&[data-outside-range]': {
				opacity: 'disabled',
			},

			'&[data-in-range]': {
				bgColor: 'default.200',
				rounded: '0',

				'&[data-range-start]': {
					roundedStart: 'full',
				},
				'&[data-range-end]': {
					roundedEnd: 'full',
				},
			},
		},
	},
	variants: {
		size: {
			sm: {
				root: smRootStyle,
				positioner: smRootStyle,
			},
			md: {
				root: mdRootStyle,
				positioner: mdRootStyle,
			},
			lg: {
				root: lgRootStyle,
				positioner: lgRootStyle,
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
