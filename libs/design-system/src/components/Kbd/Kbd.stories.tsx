import type { Meta, StoryObj } from '@storybook/react'

import { Kbd } from './Kbd'

const meta: Meta<typeof Kbd> = {
	component: Kbd,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<span>
				<Kbd>
					<abbr>⌘</abbr>
					<span>K</span>
				</Kbd>
			</span>
		)
	},
}
