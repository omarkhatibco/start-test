import { toastAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: toastAnatomy.keys(),
	base: {
		root: {
			overflowWrap: 'anywhere',
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: 4,
			minW: 'xs',
			height: 'var(--height)',
			opacity: 'var(--opacity)',
			px: 3,
			py: 3,
			rounded: 'lg',
			bgColor: 'content1',
			color: 'content1.foreground',
			boxShadow: 'md',
			transition: 'all',
			translate: 'var(--x) var(--y) 0',
			willChange: 'translate,opacity,scale',
			transitionProperty: 'translate, scale, opacity, height',
			zIndex: 'var(--z-index)',
			scale: 'var(--scale)',
		},
		title: {
			fontSize: 'sm',
			fontWeight: 'semibold',
		},
		description: {
			fontSize: 'sm',
		},
		actionTrigger: {},
		closeTrigger: {},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
