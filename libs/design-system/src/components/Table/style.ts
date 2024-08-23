import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: ['root', 'body', 'cell', 'footer', 'head', 'header', 'row', 'caption'],
	base: {
		root: {
			captionSide: 'bottom',
			width: 'full',
			tableLayout: 'auto',
		},
		body: {},
		caption: {
			fontSize: 'md',
			fontWeight: 'bold',
			color: 'foreground.500',
		},
		cell: {
			verticalAlign: 'middle',
			fontSize: 'sm',
			py: 2,
			px: 3,
		},
		footer: {
			bgColor: 'default.100',

			px: 3,
			fontSize: 'xs',
			fontWeight: 'semibold',
			color: 'foreground.500',
			h: 10,

			'& tr td': {
				_first: {
					roundedStart: 'lg',
				},
				_last: {
					roundedEnd: 'lg',
				},
			},
		},
		header: {
			bgColor: 'default.100',

			px: 3,
			fontSize: 'xs',
			fontWeight: 'semibold',
			color: 'foreground.500',
			h: 10,

			textAlign: 'start',
			verticalAlign: 'middle',

			_first: {
				roundedStart: 'lg',
			},
			_last: {
				roundedEnd: 'lg',
			},
		},
		row: {
			transition: 'all',
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
