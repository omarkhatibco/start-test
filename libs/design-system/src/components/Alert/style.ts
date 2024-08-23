import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: ['root', 'content', 'description', 'icon', 'title'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'flex-start',
			width: 'full',
			position: 'relative',
			bgColor: 'content1',
		},

		description: {},
		title: {
			fontWeight: 'semibold',
		},
	},

	variants: {
		variant: {
			fullWidth: {
				root: {
					alignItems: { base: 'flex-start', md: 'center' },
					flexDirection: {
						base: 'column',
						md: 'row',
					},
					px: { base: 8, md: 12 },
					py: { base: 4, md: 3 },
					gap: 3,
					borderTopWidth: { base: '1px', md: '0' },
					borderBottomWidth: '1px',
				},
			},
			floating: {
				root: {
					p: 4,
					gap: 4,
					borderWidth: '1px',
					borderRadius: 'lg',
					boxShadow: 'xs',
				},
			},
		},
	},
	defaultVariants: {
		variant: 'floating',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
