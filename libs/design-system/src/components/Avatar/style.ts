import { avatarAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

export const style = sva({
	slots: avatarAnatomy.keys(),
	base: {
		root: {
			position: 'relative',
			userSelect: 'none',
			rounded: 'full',
			overflow: 'hidden',
			flexShrink: 0,
			// outlineWidth: 2,
			// outlineOffset: 0.5,
			// outlineStyle: 'solid',
			// outlineColor: 'default',
		},
		fallback: {
			position: 'absolute',
			inset: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			bgColor: 'default',
			color: 'default.foreground',
			textTransform: 'uppercase',

			_hidden: {
				display: 'none',
			},
		},
		image: {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
			borderRadius: 'inherit',

			_hidden: {
				display: 'none',
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
	variants: {
		size: {
			xss: {
				root: {
					width: 5,
					height: 5,
					fontSize: 'xs',
				},
			},
			xs: {
				root: {
					width: 6,
					height: 6,
					fontSize: 'xs',
				},
			},
			sm: {
				root: {
					width: 8,
					height: 8,
					fontSize: 'xs',
				},
			},
			md: {
				root: {
					width: 10,
					height: 10,
					fontSize: 'xs',
				},
			},
			lg: {
				root: {
					width: 12,
					height: 12,
					fontSize: 'sm',
				},
			},
			xl: {
				root: {
					width: 14,
					height: 14,
					fontSize: 'md',
				},
			},
			'2xl': {
				root: {
					width: 16,
					height: 16,
					fontSize: 'lg',
				},
			},
		},
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
