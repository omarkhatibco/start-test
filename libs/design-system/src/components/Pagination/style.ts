import { paginationAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'
import type { SystemStyleObject } from '@mando/styled-system/types'

const itemStyle = {
	fontVariantNumeric: 'tabular-nums',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	w: 10,
	h: 10,
	gap: 1,
	bgColor: 'default.100',
	color: 'default.foreground',
	fontSize: 'sm',
	rounded: 'md',
	cursor: 'pointer',
	transition: 'all',
	userSelect: 'none',

	_hover: {
		opacity: 'hover',
		bgColor: 'default.200',
	},

	_selected: {
		bgColor: 'primary',
		color: 'primary.foreground',
		pointerEvents: 'none',
	},

	_disabled: {
		opacity: 'disabled',
		pointerEvents: 'none',
	},
} satisfies SystemStyleObject

const nextItemStyle = {
	...itemStyle,
	w: 'max-content',
	px: 4,
} satisfies SystemStyleObject

export const style = sva({
	slots: paginationAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'nowrap',
			gap: 1,
			overflow: 'visible',
		},
		item: itemStyle,
		ellipsis: { ...itemStyle, pointerEvents: 'none', bgColor: 'transparent' },
		nextTrigger: nextItemStyle,
		prevTrigger: nextItemStyle,
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
