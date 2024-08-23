import { fileUploadAnatomy } from '@ark-ui/react'
import { sva } from '@mando/styled-system/css'
import type { RecipeVariantProps } from '@mando/styled-system/css'

import {
	fieldLabelStyle,
	fieldRootStyle,
	lgRootStyle,
	mdRootStyle,
	smRootStyle,
} from '../Field/style'

export const style = sva({
	slots: fileUploadAnatomy.keys(),
	base: {
		root: fieldRootStyle,
		label: fieldLabelStyle,
		dropzone: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			justifyContent: 'center',
			gap: 3,

			minHeight: 'xs',
			bgColor: 'default.100',
			rounded: 'var(--field-border-radius)',
			px: 6,
			py: 4,
			transition: 'all',

			_dragging: {
				bgColor: 'default.200',
			},

			_disabled: {
				pointerEvents: 'none',
				opacity: 'disabled',
			},
		},

		itemGroup: {
			display: 'flex',
			flexDirection: 'column',
			gap: 1,
		},
		item: {
			display: 'grid',
			columnGap: '2',
			gridTemplateColumns: 'auto 1fr auto',
			gridTemplateAreas: `
        "preview name delete"
        "preview size delete"
        `,

			animation: 'fadeIn',
			bgColor: 'default.100',
			rounded: 'var(--field-border-radius)',

			p: 4,
		},
		itemName: {
			gridArea: 'name',
			fontSize: 'var(--field-font-size)',
			fontWeight: 'medium',
		},
		itemSizeText: {
			gridArea: 'size',
			fontSize: 'var(--field-affix-font-size)',
			color: 'default.500',
		},
		itemDeleteTrigger: {
			cursor: 'pointer',
			alignSelf: 'flex-start',
			gridArea: 'delete',
			color: 'default.500',
			_svg: {
				w: 'var(--field-icon-size)',
				h: 'var(--field-icon-size)',
			},
		},
		itemPreview: {
			gridArea: 'preview',
		},
		itemPreviewImage: {
			aspectRatio: '1',
			height: '10',
			width: '10',
			rounded: 'lg',
		},
	},

	variants: {
		size: {
			sm: {
				root: smRootStyle,
			},
			md: {
				root: mdRootStyle,
			},
			lg: {
				root: lgRootStyle,
			},
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

type Variants = RecipeVariantProps<typeof style> & {}
export interface VariantsProps extends Variants {}
