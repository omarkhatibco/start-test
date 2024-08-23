import { dialogAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import { backdropStyle, descriptionStyle, titleStyle } from '../Dialog/style'

const anatomy = dialogAnatomy.extendWith('header', 'body', 'footer')

export const style = sva({
	slots: anatomy.keys(),
	base: {
		backdrop: backdropStyle,
		positioner: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100dvh',
			position: 'fixed',
			top: 0,
			p: 2,

			width: { base: '100vw', sm: 'sm' },
			zIndex: 'modal',
		},
		content: {
			position: 'relative',
			bgColor: 'content1',
			color: 'content1.foreground',
			boxShadow: 'lg',
			display: 'grid',
			divideY: '1px',

			shadow: 'sm',
			rounded: 'lg',

			gridTemplateColumns: '1fr',

			gridTemplateRows: 'auto 1fr auto',

			gridTemplateAreas: `
        'header'
        'body'
        'footer'
      `,
			height: 'full',
			width: 'full',
			_hidden: {
				display: 'none',
			},
		},
		header: {
			display: 'flex',
			flexDirection: 'column',
			gap: '1',
			gridArea: 'header',
			py: 4,
			px: 6,
		},
		body: {
			display: 'flex',
			flexDirection: 'column',
			gridArea: 'body',
			overflow: 'auto',
			py: 4,
			px: 6,
		},
		footer: {
			display: 'flex',
			gridArea: 'footer',

			py: 4,
			px: 6,
		},
		title: titleStyle,
		description: descriptionStyle,
	},
	defaultVariants: {
		variant: 'end',
	},
	variants: {
		variant: {
			start: {
				positioner: {
					start: 0,
				},
				content: {
					_open: {
						animation: 'drawer-in-left',
					},
					_closed: {
						animation: 'drawer-out-left',
					},
				},
			},
			end: {
				positioner: {
					end: 0,
				},
				content: {
					_open: {
						animation: 'drawer-in-right',
					},
					_closed: {
						animation: 'drawer-out-right',
					},
				},
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
