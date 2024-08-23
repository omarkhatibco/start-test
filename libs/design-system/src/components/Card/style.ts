import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: ['root', 'header', 'body', 'footer', 'title', 'description'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			pos: 'relative',
			w: 'full',
			overflow: 'hidden',
			transition: 'all',
			zIndex: 0,
			bgColor: 'content1',
			boxShadow: 'md',
			rounded: 'lg',
		},
		header: {
			display: 'flex',
			gap: 3,
			px: 3,
			py: 3,
		},
		body: {
			display: 'flex',
			flexDirection: 'column',
			gap: 2,
			px: 3,
			py: 3,
		},
		footer: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			gap: 3,
			px: 3,
			py: 3,
		},
		title: {
			fontWeight: 'semibold',
			fontSize: 'lg',
		},
		description: {},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
