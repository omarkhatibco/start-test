import { hoverCardAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import { contentStyle } from '../Popover/style'

export const style = sva({
	slots: hoverCardAnatomy.keys(),
	base: {
		content: contentStyle,
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
