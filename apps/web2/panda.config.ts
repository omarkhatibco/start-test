import { defineMandoAIConfig } from '@mando/styled-system/theme'

export default defineMandoAIConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['../../libs/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	outdir: '../../libs/styled-system/_generated',
})
