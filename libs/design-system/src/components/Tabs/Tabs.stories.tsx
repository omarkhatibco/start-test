import { VStack } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import * as Tabs from './Tabs'

const minOptions = [
	{ id: 'react', label: 'React' },
	{ id: 'solid', label: 'Solid' },
	{ id: 'svelte', label: 'Svelte', disabled: true },
	{ id: 'vue', label: 'Vue' },
]
const options = [
	{ id: 'react', label: 'React' },
	{ id: 'solid', label: 'Solid' },
	{ id: 'svelte', label: 'Svelte', disabled: true },
	{ id: 'vue', label: 'Vue' },
	{ id: 'angular', label: 'Angular' },
	{ id: 'react-native', label: 'React Native' },
	{ id: 'flutter', label: 'Flutter' },
	{ id: 'ionic', label: 'Ionic' },
	{ id: 'vue-next', label: 'Vue Next' },
	{ id: 'next', label: 'Next' },
	{ id: 'nuxt', label: 'Nuxt' },
	{ id: 'gatsby', label: 'Gatsby' },
	{ id: 'astro', label: 'Astro' },
	{ id: 'sveltekit', label: 'SvelteKit' },
	{ id: 'remix', label: 'Remix' },
	{ id: 'preact', label: 'Preact' },
]

const meta: Meta<typeof Tabs.Root> = {
	component: Tabs.Root,
}

export default meta

type Story = StoryObj<typeof meta>

const variants = ['solid', 'underlined', 'bordered', 'ghost'] as const

export const Default: Story = {
	render: () => {
		return (
			<VStack bgColor={'white'} width={'800px'} p={6} gap={4}>
				{variants.map((variant) => (
					<Tabs.Root
						defaultValue='react'
						variant={variant}
						key={variant}
						size='md'
					>
						<Tabs.List>
							{options.map((option) => (
								<Tabs.Trigger
									key={option.id}
									value={option.id}
									disabled={option.disabled}
								>
									{option.label}
								</Tabs.Trigger>
							))}
							<Tabs.Indicator />
						</Tabs.List>
						{options.map((option) => (
							<Tabs.Content key={option.id} value={option.id}>
								Know {option.label}? Check out Solid!Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.
							</Tabs.Content>
						))}
					</Tabs.Root>
				))}
			</VStack>
		)
	},
}

export const WithVertical: Story = {
	render: () => {
		return (
			<VStack bgColor={'white'} width={'800px'} p={6} gap={4}>
				{variants.map((variant) => (
					<Tabs.Root
						defaultValue='react'
						variant={variant}
						key={variant}
						size='md'
						orientation='vertical'
						// isFullWidth
					>
						<Tabs.List>
							{minOptions.map((option) => (
								<Tabs.Trigger
									key={option.id}
									value={option.id}
									disabled={option.disabled}
								>
									{option.label}
								</Tabs.Trigger>
							))}
							<Tabs.Indicator />
						</Tabs.List>
						{minOptions.map((option) => (
							<Tabs.Content key={option.id} value={option.id}>
								Know {option.label}? Check out Solid! Lorem ipsum dolor sit
								amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</Tabs.Content>
						))}
					</Tabs.Root>
				))}
			</VStack>
		)
	},
}
