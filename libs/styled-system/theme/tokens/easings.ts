import { defineTokens } from '@pandacss/dev'
import { preset } from '@pandacss/preset-panda'

export const easings = defineTokens.easings({
	...preset.theme.tokens.easings,
	'emphasized-in': { value: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)' },
	'emphasized-out': { value: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)' },
})
