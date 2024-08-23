import { popoverAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'
import type { SystemStyleObject } from '@mando/styled-system/types'

export const contentStyle = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	gap: 0,
	w: 'max-content',
	maxW: 'breakpoint-sm',
	zIndex: 'popover',

	px: 3,
	py: 3,
	rounded: 'lg',
	bgColor: 'content1',
	color: 'content1.foreground',

	boxShadow: 'md',

	_open: {
		animation: 'fade-in',
	},
	_closed: {
		animation: 'fade-out',
	},

	_hidden: {
		display: 'none',
	},
} satisfies SystemStyleObject

export const style = sva({
	slots: popoverAnatomy.keys(),
	base: {
		positioner: {
			position: 'relative',
		},
		content: contentStyle,
		title: {
			fontSize: 'sm',
			fontWeight: 'bold',
		},
		description: {
			fontSize: 'xs',
		},
		arrow: {
			'--arrow-size': 'spacing.2',
			'--arrow-background': 'colors.bg.primary.alt',
		},
		arrowTip: {
			borderTopWidth: 1,
			borderInlineStartWidth: 1,
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
