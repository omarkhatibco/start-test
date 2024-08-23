import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
	':root': {
		'--global-color-border': 'colors.divider',
		'--global-color-placeholder': 'foreground.500',
		'--transition-duration': '300ms',
		// '--global-font-body': 'fonts.ibmArabic',
	},
	// TODO mark color and selection color as global
	body: {
		backgroundColor: 'background',
		color: 'foreground',
		lineHeight: '1.5',
		minH: '100dvh',
	},
	'p, li': {
		textWrap: 'pretty',
	},
	// https://x.com/JohnPhamous/status/1800963715631808949/photo/1
	textarea: {
		fieldSizing: 'content',
		minH: '41h',
	},

	':focus-visible': {
		ringWidth: '2',
		ringOffset: '1',
		ringColor: 'border.brand',
	},

	'@media (prefers-reduced-motion: reduce)': {
		'*, *::before, *::after': {
			animationDuration: '0.01ms !important',
			animationIterationCount: '1 !important',
			transitionDuration: '0.01ms !important',
			scrollBehavior: 'auto !important',
			transition: 'none',
		},
	},
})
