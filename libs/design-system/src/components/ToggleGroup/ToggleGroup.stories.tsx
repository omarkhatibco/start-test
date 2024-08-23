import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../'
import * as ToggleGroup from './ToggleGroup'

const meta: Meta<typeof ToggleGroup.Root> = {
	component: ToggleGroup.Root,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<ToggleGroup.Root>
				<ToggleGroup.Item value='bold' aria-label='Toggle Bold' disabled>
					<Icon icon='material-symbols:format-bold' />
				</ToggleGroup.Item>
				<ToggleGroup.Item value='italic' aria-label='Toggle Italic'>
					<Icon icon='material-symbols:format-italic' />
				</ToggleGroup.Item>
				<ToggleGroup.Item value='underline' aria-label='Toggle Underline'>
					<Icon icon='material-symbols:format-underlined' />
				</ToggleGroup.Item>
			</ToggleGroup.Root>
		)
	},
}

export const WithText: Story = {
	render: () => {
		return (
			<ToggleGroup.Root>
				<ToggleGroup.Item value='bold' aria-label='Toggle Bold'>
					<Icon icon='material-symbols:format-bold' />
					Bold
				</ToggleGroup.Item>
				<ToggleGroup.Item value='italic' aria-label='Toggle Italic'>
					<Icon icon='material-symbols:format-italic' />
					Italic
				</ToggleGroup.Item>
				<ToggleGroup.Item value='underline' aria-label='Toggle Underline'>
					<Icon icon='material-symbols:format-underlined' />
					Underline
				</ToggleGroup.Item>
			</ToggleGroup.Root>
		)
	},
}

export const WithVertical: Story = {
	render: () => {
		return (
			<ToggleGroup.Root orientation='vertical'>
				<ToggleGroup.Item value='bold' aria-label='Toggle Bold'>
					<Icon icon='material-symbols:format-bold' />
					Bold
				</ToggleGroup.Item>
				<ToggleGroup.Item value='italic' aria-label='Toggle Italic'>
					<Icon icon='material-symbols:format-italic' />
					Italic
				</ToggleGroup.Item>
				<ToggleGroup.Item value='underline' aria-label='Toggle Underline'>
					<Icon icon='material-symbols:format-underlined' />
					Underline
				</ToggleGroup.Item>
			</ToggleGroup.Root>
		)
	},
}
