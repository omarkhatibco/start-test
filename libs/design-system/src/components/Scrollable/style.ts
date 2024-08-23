import { cva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = cva({
	base: {
		'--scroll-shadow-size': 'sizes.10',
		py: 'calc(var(--scroll-shadow-size) / 2)',

		maskImage:
			'linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent)',

		// _scrollbar: {
		// 	width: 1,
		// },
		// _scrollbarThumb: {
		// 	bgColor: 'default.500',
		// },
		// _scrollbarTrack: {
		// 	bgColor: 'divider',
		// },
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
