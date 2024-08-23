import { collapsibleAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: collapsibleAnatomy.keys(),
	base: {
		root: {
			alignItems: 'flex-start',
			display: 'flex',
			flexDirection: 'column',
			width: 'full',
		},
		content: {
			overflow: 'hidden',
			width: 'full',
			_open: {
				animation: 'collapse-in',
			},
			_closed: {
				animation: 'collapse-out',
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
