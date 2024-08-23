import { defineSemanticTokens, defineTokens } from '@pandacss/dev'
import { preset } from '@pandacss/preset-panda'

import { colors, semanticColors } from './colors'
import { easings } from './easings'
import { animations } from './keyframes'
import { shadows } from './shadows'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { fontSizes, fontWeights, fonts, textStyles } from './typography'
import { zIndex } from './zIndex'

export const tokens = defineTokens({
	...preset.theme.tokens,
	radii: {
		sm: { value: '0.5rem' }, // 8px
		md: { value: '0.75rem' }, // 12px
		lg: { value: '0.875rem' }, // 12px
		full: { value: '9999px' }, // infinity
	},
	easings,
	fonts,
	// fontWeights,
	// fontSizes,
	// textStyles,
	colors,

	blurs: {
		sm: { value: '4px' },
		md: { value: '8px' },
		lg: { value: '12px' },
		xl: { value: '20px' },
	},
	borderWidths: {
		sm: { value: '1px' },
		md: { value: '2px' },
		lg: { value: '3px' },
	},

	// sizes,
	// spacing,
	animations,
	zIndex,
})

export const semanticTokens = defineSemanticTokens({
	colors: semanticColors,
	shadows,
	opacity: {
		disabled: {
			value: {
				base: 0.5,
				_dark: 0.5,
			},
		},
		hover: {
			value: {
				base: 0.8,
				_dark: 0.9,
			},
		},
	},
})
