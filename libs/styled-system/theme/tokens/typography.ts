import { defineTextStyles, defineTokens } from '@pandacss/dev'

export const fontSizes = {
	'2xs': { value: '0.5rem' }, // 8px
	xs: { value: '0.75rem' }, // 12px
	sm: { value: '0.875rem' }, // 14px
	md: { value: '1rem' }, // 16px
	lg: { value: '1.125rem' }, // 18px
	xl: { value: '1.25rem' }, // 20px
	'2xl': { value: '1.5rem' }, // 24px
	'3xl': { value: '1.875rem' }, // 28px
	'4xl': { value: '2.25rem' }, // 32px
	'5xl': { value: '3rem' }, // 36px
	'6xl': { value: '3.75rem' }, // 60px
	'7xl': { value: '4.5rem' }, // 72px
	'8xl': { value: '6rem' }, // 96px
	'9xl': { value: '8rem' }, // 128px
}

export const fontWeights = defineTokens.fontWeights({
	normal: { value: '400' },
	medium: { value: '500' },
	semibold: { value: '600' },
	bold: { value: '700' },
})

export const fonts = defineTokens.fonts({
	inter: {
		value: ['Inter', 'sans-serif'],
	},
	cairo: {
		value: ['Cairo', 'sans-serif'],
	},
	ibmArabic: {
		value: ['IBM Plex Sans Arabic', 'sans-serif'],
	},
	mono: {
		value: [
			'ui-monospace',
			'SFMono-Regular',
			'Menlo',
			'Monaco',
			'Consolas',
			'"Liberation Mono"',
			'"Courier New"',
			'monospace',
		],
	},
})

export const textStyles = defineTextStyles({
	display: {
		'2xl': {
			description: 'Display lg',
			value: {
				fontSize: '7xl',
				lineHeight: 'tight',
				letterSpacing: 'tight',
			},
		},
		xl: {
			description: 'Display lg',
			value: {
				fontSize: '6xl',
				lineHeight: 'tight',
				letterSpacing: 'tight',
			},
		},
		lg: {
			description: 'Display lg',
			value: {
				fontSize: '5xl',
				lineHeight: 'tight',
				letterSpacing: 'tight',
			},
		},
		md: {
			description: 'Display md',
			value: {
				fontSize: '4xl',
				lineHeight: 'tight',
				letterSpacing: 'tight',
			},
		},
		sm: {
			description: 'Display sm',
			value: {
				fontSize: '3xl',
				lineHeight: 'tight',
			},
		},
		xs: {
			description: 'Display xs',
			value: {
				fontSize: '2xl',
				lineHeight: 'snug',
			},
		},
	},
	text: {
		xl: {
			description: 'Text lg',
			value: {
				fontSize: 'xl',
				lineHeight: 'normal',
			},
		},
		lg: {
			description: 'Text lg',
			value: {
				fontSize: 'lg',
				lineHeight: 'normal',
			},
		},
		md: {
			description: 'Text md',
			value: {
				fontSize: 'md',
				lineHeight: 'normal',
			},
		},
		sm: {
			description: 'Text sm',
			value: {
				fontSize: 'sm',
				lineHeight: 'normal',
			},
		},
		xs: {
			description: 'Text xs',
			value: {
				fontSize: 'xs',
				lineHeight: 'normal',
			},
		},
	},
})
