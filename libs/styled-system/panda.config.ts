import { defineMandoAIConfig } from './theme'

export default defineMandoAIConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['../../libs/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: './_generated',
	// importMap: '@mando/styled-system',
})
