import { definePreset } from '@pandacss/dev'

import { breakpoints } from './breakpoints'
import { containerSizes } from './containers'
import { globalCss } from './globalCss'
import { semanticTokens, tokens } from './tokens'
import { keyframes } from './tokens/keyframes'
import { textStyles } from './tokens/typography'

import { conditions } from './conditions'
import { patterns } from './patterns'
import { recipes, slotRecipes } from './recipes'
import { utilities } from './utilities'

export const preset = definePreset({
	name: 'mandoAI',
	globalCss,
	theme: {
		keyframes,
		breakpoints,
		tokens,
		semanticTokens,
		textStyles,
		containerSizes,
		extend: {
			recipes,
			slotRecipes,
		},
	},
	patterns,
	conditions,
	utilities,
})
