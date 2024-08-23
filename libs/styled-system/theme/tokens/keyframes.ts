import { defineKeyframes } from '@pandacss/dev'
import { defineTokens } from '@pandacss/dev'
import { preset } from '@pandacss/preset-panda'

export const keyframes = defineKeyframes({
	...preset.theme.keyframes,
	// buffering: {
	// 	'0%': { transform: 'translateX(10px)' },
	// },
	indeterminate1: {
		'0%': { left: '-35%', right: '100%' },
		'60%': { left: '100%', right: '-90%' },
		'100%': { left: '100%', right: '-90%' },
	},
	indeterminate2: {
		'0%': { left: '-200%', right: '100%' },
		'60%': { left: '107%', right: '-8%' },
		'100%': { left: '107%', right: '-8%' },
	},
	spinner: {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'50%': {
			transform: 'rotate(360deg)',
		},
		'100%': {
			transform: 'rotate(720deg)',
		},
	},
	'fade-in': {
		from: { opacity: '0' },
		to: { opacity: '1' },
	},
	'fade-out': {
		from: { opacity: '1' },
		to: { opacity: '0' },
	},
	'slide-in': {
		'0%': { opacity: '0', transform: 'translateY(64px)' },
		'100%': { opacity: '1', transform: 'translateY(0)' },
	},
	'slide-out': {
		'0%': { opacity: '1', transform: 'translateY(0)' },
		'100%': { opacity: '0', transform: 'translateY(64px)' },
	},
	'slide-in-left': {
		'0%': { transform: 'translateX(-100%)' },
		'100%': { transform: 'translateX(0%)' },
	},
	'slide-out-left': {
		'0%': { transform: 'translateX(0%)' },
		'100%': { transform: 'translateX(-100%)' },
	},
	'slide-in-right': {
		'0%': { transform: 'translateX(100%)' },
		'100%': { transform: 'translateX(0%)' },
	},
	'slide-out-right': {
		'0%': { transform: 'translateX(0%)' },
		'100%': { transform: 'translateX(100%)' },
	},
	'collapse-in': {
		'0%': { height: '0' },
		'100%': { height: 'var(--height)' },
	},
	'collapse-out': {
		'0%': { height: 'var(--height)' },
		'100%': { height: '0' },
	},
	'short-slide-in': {
		'0%': { opacity: '0', transform: 'translateY(-4px)' },
		'100%': { opacity: '1', transform: 'translateY(0)' },
	},
	'short-slide-out': {
		'0%': { opacity: '1', transform: 'translateY(0)' },
		'100%': { opacity: '0', transform: 'translateY(-4px)' },
	},
})

export const animations = defineTokens.animations({
	...preset.theme.tokens.animations,
	'backdrop-in': {
		value: 'fade-in 250ms {easings.emphasized-in}',
	},
	'backdrop-out': {
		value: 'fade-out 200ms {easings.emphasized-out}',
	},
	'dialog-in': {
		value: 'slide-in 400ms {easings.emphasized-in}',
	},
	'dialog-out': {
		value: 'slide-out 200ms {easings.emphasized-out}',
	},
	'drawer-in-left': {
		value: 'slide-in-left 400ms {easings.emphasized-in}',
	},
	'drawer-out-left': {
		value: 'slide-out-left 200ms {easings.emphasized-out}',
	},
	'drawer-in-right': {
		value: 'slide-in-right 400ms {easings.emphasized-in}',
	},
	'drawer-out-right': {
		value: 'slide-out-right 200ms {easings.emphasized-out}',
	},
	'fade-in': {
		value: 'fade-in 250ms {easings.emphasized-in}',
	},
	'fade-out': {
		value: 'fade-out 200ms {easings.emphasized-out}',
	},
	'short-slide-in': {
		value: 'short-slide-in 250ms {easings.emphasized-out}',
	},
	'short-slide-out': {
		value: 'short-slide-out 200ms {easings.emphasized-out}',
	},
	'collapse-in': {
		value: 'collapse-in 250ms {easings.emphasized-in}',
	},
	'collapse-out': {
		value: 'collapse-out 200ms {easings.emphasized-out}',
	},
	// Linear Progress
	indeterminate1: {
		value:
			'indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
	},
	indeterminate2: {
		value:
			'indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite',
	},
	// Circular Progress
	spinner: { value: 'spinner 1.4s linear infinite' },
})
