import { definePattern } from '@pandacss/dev'

export const list = definePattern({
	jsxElement: 'ul',
	properties: {},
	transform(props) {
		return {
			listStylePosition: 'inside',
			listStyleType: 'none',

			...props,
		}
	},
})

export const unorderedList = definePattern({
	jsxElement: 'ul',
	properties: {},
	transform(props) {
		const { ...rest } = props
		return {
			listStylePosition: 'inside',
			listStyleType: 'disc',

			...rest,
		}
	},
})

export const orderedList = definePattern({
	jsxElement: 'ol',
	properties: {},
	transform(props) {
		const { ...rest } = props
		return {
			listStylePosition: 'inside',
			listStyleType: 'decimal',

			...rest,
		}
	},
})

export const listItem = definePattern({
	jsxElement: 'li',
	properties: {},
	transform(props) {
		return {
			...props,
		}
	},
})
