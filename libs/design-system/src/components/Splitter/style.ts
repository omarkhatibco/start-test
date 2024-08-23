import { splitterAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: splitterAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			gap: '4',
		},
		panel: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		resizeTrigger: {
			rounded: 'full',
			transition: 'all',
			outline: '0',

			bgColor: 'divider',

			_hover: {
				bgColor: 'foreground',
			},
			_active: {
				opacity: 'hover',
			},

			_horizontal: {
				minWidth: '1.5',
				margin: 'min(1rem, 20%) 0',
			},

			_vertical: {
				minHeight: '1.5',
				margin: '0 min(1rem, 20%)',
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
