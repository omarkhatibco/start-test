import { fieldAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'
import type { SystemStyleObject } from '@mando/styled-system/types'

export const fieldRootStyle = {
	display: 'flex',
	flexDirection: 'column',
	gap: 1,
	w: 'full',
} satisfies SystemStyleObject

export const fieldLabelStyle = {
	fontSize: 'var(--field-font-size)',
	fontWeight: 'medium',
	// color: 'foreground.500',
} satisfies SystemStyleObject

export const fieldControlStyle = {
	display: 'flex',
	alignItems: 'flex-start',
	gap: 2,

	px: 3,
	w: 'full',
	minH: 'var(--field-height)',
	minW: 'var(--field-height)',
	rounded: 'var(--field-border-radius)',

	bgColor: 'default.100',
	shadow: 'xs',

	transition: 'all',

	_hover: {
		bgColor: 'default.200',
	},

	_placeholder: {
		color: 'foreground.500',
	},

	_roleGroupInvalid: {
		bgColor: 'error.100',
	},
	_invalid: {
		bgColor: 'error.100',
	},

	_roleGroupDisabled: {
		opacity: 'disabled',
		pointerEvents: 'none',
	},
	_disabled: {
		opacity: 'disabled',
		pointerEvents: 'none',
	},

	_focusWithin: {
		bgColor: 'default.200',
	},
} satisfies SystemStyleObject

export const fieldInputStyle = {
	bgColor: 'transparent',
	borderWidth: '0',
	flexGrow: 1,
	outline: 'none',
	width: 'full',
	height: 'var(--field-height)',
	fontSize: 'var(--field-font-size)',

	py: 0,
	order: 1,

	'&::-webkit-search-cancel-button, &::-webkit-search-decoration': {
		appearance: 'none',
	},

	_placeholder: {
		color: 'foreground.500',
	},

	_disabled: {
		opacity: 'disabled',
	},
} satisfies SystemStyleObject

export const fieldControlAffixStyle = {
	minH: 'var(--field-height)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: 1,
	order: 2,
	color: 'default.500',
	fontSize: 'var(--field-affix-font-size)',
	_svg: {
		w: 'var(--field-icon-size)',
		h: 'var(--field-icon-size)',
	},

	'& button': {
		cursor: 'pointer',
	},
} satisfies SystemStyleObject

export const fieldHelperTextStyle = {
	fontSize: 'var(--field-affix-font-size)',
	color: 'foreground.500',

	_roleGroupInvalid: {
		display: 'none',
	},
} satisfies SystemStyleObject

export const fieldErrorTextStyle = {
	fontSize: 'var(--field-affix-font-size)',
	color: 'error.500',

	display: 'none',
	_roleGroupInvalid: {
		display: 'block',
	},
} satisfies SystemStyleObject

export const smRootStyle = {
	'--field-height': 'sizes.8',
	'--field-border-radius': 'radii.sm',
	'--field-font-size': 'fontSizes.sm',
	'--field-affix-font-size': 'fontSizes.xs',
	'--field-icon-size': 'sizes.4',
} satisfies SystemStyleObject

export const mdRootStyle = {
	'--field-height': 'sizes.10',
	'--field-border-radius': 'radii.md',
	'--field-font-size': 'fontSizes.sm',
	'--field-affix-font-size': 'fontSizes.xs',
	'--field-icon-size': 'sizes.5',
} satisfies SystemStyleObject

export const lgRootStyle = {
	'--field-height': 'sizes.12',
	'--field-border-radius': 'radii.lg',
	'--field-font-size': 'fontSizes.md',
	'--field-affix-font-size': 'fontSizes.sm',
	'--field-icon-size': 'sizes.6',
} satisfies SystemStyleObject

export const style = sva({
	slots: fieldAnatomy
		.extendWith('control', 'controlPrefix', 'controlSuffix', 'inlineSelect')
		.keys(),
	base: {
		root: fieldRootStyle,
		label: fieldLabelStyle,
		control: fieldControlStyle,
		input: fieldInputStyle,
		textarea: {
			...fieldInputStyle,
			resize: 'none',
		},
		select: fieldInputStyle,
		controlPrefix: { ...fieldControlAffixStyle, order: 0 },
		controlSuffix: fieldControlAffixStyle,
		helperText: fieldHelperTextStyle,
		errorText: fieldErrorTextStyle,
	},
	variants: {
		size: {
			sm: {
				root: smRootStyle,
				textarea: {
					minH: '24',
					py: 1.5,
				},
			},
			md: {
				root: mdRootStyle,
				textarea: {
					minH: '32',
					py: 2,
				},
			},
			lg: {
				root: lgRootStyle,
				textarea: {
					minH: '40',
					py: 2.5,
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
