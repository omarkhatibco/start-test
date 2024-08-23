import type { Meta, StoryObj } from '@storybook/react'

import * as RadioGroup from './RadioGroup'

const meta: Meta<typeof RadioGroup.Root> = {
	component: RadioGroup.Root,
}

export default meta

type Story = StoryObj<typeof meta>

const options = [
	{ id: 'react', label: 'React' },
	{ id: 'solid', label: 'Solid' },
	{ id: 'svelte', label: 'Svelte', disabled: true },
	{ id: 'vue', label: 'Vue' },
]

export const Default: Story = {
	render: () => {
		return (
			<>
				<RadioGroup.Root defaultValue='react' size='sm'>
					<RadioGroup.Label>Select a framework</RadioGroup.Label>
					{options.map((option) => (
						<RadioGroup.Item
							key={option.id}
							value={option.id}
							disabled={option.disabled}
						>
							<RadioGroup.ItemControl />
							<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
							<RadioGroup.ItemHiddenInput />
						</RadioGroup.Item>
					))}
				</RadioGroup.Root>
				<RadioGroup.Root defaultValue='react' size='md'>
					<RadioGroup.Label>Select a framework</RadioGroup.Label>
					{options.map((option) => (
						<RadioGroup.Item
							key={option.id}
							value={option.id}
							disabled={option.disabled}
						>
							<RadioGroup.ItemControl />
							<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
							<RadioGroup.ItemHiddenInput />
						</RadioGroup.Item>
					))}
				</RadioGroup.Root>
				<RadioGroup.Root defaultValue='react' size='lg'>
					<RadioGroup.Label>Select a framework</RadioGroup.Label>
					{options.map((option) => (
						<RadioGroup.Item
							key={option.id}
							value={option.id}
							disabled={option.disabled}
						>
							<RadioGroup.ItemControl />
							<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
							<RadioGroup.ItemHiddenInput />
						</RadioGroup.Item>
					))}
				</RadioGroup.Root>
			</>
		)
	},
}

export const withInvalid: Story = {
	render: () => {
		return (
			<RadioGroup.Root defaultValue='react'>
				<RadioGroup.Label>Select a framework</RadioGroup.Label>
				{options.map((option) => (
					<RadioGroup.Item
						key={option.id}
						value={option.id}
						disabled={option.disabled}
						invalid
					>
						<RadioGroup.ItemControl />
						<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
						<RadioGroup.HiddenInput />
					</RadioGroup.Item>
				))}
			</RadioGroup.Root>
		)
	},
}
