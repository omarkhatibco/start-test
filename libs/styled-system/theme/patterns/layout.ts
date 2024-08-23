import { definePattern } from '@pandacss/dev'

export const container = definePattern({
	transform(props) {
		return {
			position: 'relative',
			maxWidth: '7xl',
			mx: 'auto',
			px: { base: '4', lg: '8' },
			...props,
		}
	},
})

export const stack = definePattern({
	defaultValues: {
		gap: 4,
	},
})

export const vstack = definePattern({
	defaultValues: {
		gap: 4,
		alignItems: 'stretch',
	},
})

export const hstack = definePattern({
	defaultValues: {
		gap: 4,
	},
})
