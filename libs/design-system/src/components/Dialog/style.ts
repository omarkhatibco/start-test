import { dialogAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'
import type { SystemStyleObject } from '@mando/styled-system/types'

export const backdropStyle = {
	bgColor: 'overlay/50',
	backdropBlur: 'md',
	backdropFilter: 'auto',
	position: 'fixed',
	inset: 0,
	w: '100vw',
	h: '100vh',
	zIndex: 'overlay',

	_open: {
		animation: 'backdrop-in',
	},
	_closed: {
		animation: 'backdrop-out',
	},
} satisfies SystemStyleObject

export const titleStyle = {
	fontSize: 'lg',
	fontWeight: 'bold',
} satisfies SystemStyleObject

export const descriptionStyle = {
	position: 'relative',
} satisfies SystemStyleObject

export const style = sva({
	slots: dialogAnatomy.keys(),
	base: {
		backdrop: backdropStyle,
		positioner: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			inset: '0',
			overflow: 'auto',
			position: 'fixed',
			width: '100vw',
			height: '100dvh',
			zIndex: 'modal',
		},
		content: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			gap: 1,
			w: 'auto',
			minW: 'breakpoint-sm',
			h: 'auto',

			bgColor: 'content1',
			color: 'content1.foreground',

			shadow: 'sm',
			rounded: 'lg',
			py: 4,
			px: 6,

			_open: {
				animation: 'dialog-in',
			},
			_closed: {
				animation: 'dialog-out',
			},
		},
		title: titleStyle,
		description: descriptionStyle,
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
