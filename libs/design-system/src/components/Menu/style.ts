import { menuAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'
import type { SystemStyleObject } from '@mando/styled-system/types'

export const itemStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	rounded: 'sm',
	gap: 2,

	fontSize: 'sm',
	flex: '1',

	cursor: 'pointer',
	transition: 'all',
	truncate: true,

	// h: '10',
	px: 2,
	py: 1.5,
	mx: '1',

	'& :where(svg)': {
		w: 5,
		h: 5,
		color: 'default.500',
	},

	'& :where(kbd)': {
		bgColor: 'transparent',
		shadow: 'none',
		borderWidth: '1',
	},

	_hover: {
		bgColor: 'default',
		'& :where(kbd)': {
			borderColor: 'primary',
		},
	},
	_highlighted: {
		bgColor: 'default',
	},
	_disabled: {
		pointerEvents: 'none',
		opacity: 'disabled',
	},
} satisfies SystemStyleObject

export const contentStyle = {
	display: 'flex',
	flexDirection: 'column',
	w: 'calc(100% + 2rem)',
	zIndex: 'dropdown',
	outline: 'none',

	background: 'content1',
	rounded: 'lg',
	boxShadow: 'md',

	py: '2',
	gap: '1',

	_hidden: {
		display: 'none',
	},
	_open: {
		animation: 'fade-in',
	},
	_closed: {
		animation: 'fade-out',
	},
} satisfies SystemStyleObject

export const itemGroupStyle = {
	display: 'flex',
	flexDirection: 'column',
	gap: 1,
} satisfies SystemStyleObject

export const itemGroupLabelStyle = {
	fontSize: 'xs',
	color: 'foreground.500',

	px: 2,
	mx: '1',
} satisfies SystemStyleObject

export const positionerStyle = {
	zIndex: 'dropdown',
} satisfies SystemStyleObject

export const style = sva({
	slots: menuAnatomy.keys(),
	base: {
		itemGroupLabel: itemGroupLabelStyle,
		content: contentStyle,
		itemGroup: itemGroupStyle,
		positioner: positionerStyle,
		item: itemStyle,
		triggerItem: itemStyle,
		separator: {},
		itemIndicator: {
			'& :where(svg)': {
				w: 4,
				h: 4,
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
