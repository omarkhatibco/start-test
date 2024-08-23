import { tooltipAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: tooltipAnatomy.keys(),
	base: {
		content: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			w: 'max-content',
			maxWidth: 200,
			bgColor: 'content1',
			color: 'content1.foreground',
			py: 1,
			px: 2.5,
			rounded: 'md',
			fontSize: 'sm',
			shadow: 'sm',

			_open: {
				animation: 'short-slide-in',
			},

			_closed: {
				animation: 'short-slide-out',
			},
		},
		arrow: {
			'--arrow-size': 'spacing.2',
			'--arrow-background': 'colors.content1',
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
