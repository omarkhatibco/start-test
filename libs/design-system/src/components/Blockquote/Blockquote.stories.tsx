import type { Meta, StoryObj } from '@storybook/react'

import { Blockquote } from './Blockquote'

const meta: Meta<typeof Blockquote> = {
	component: Blockquote,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => {
		return (
			<Blockquote maxW='300px'>
				Perfect typography is certainly the most elusive of all arts. Sculpture
				in stone alone comes near it in obstinacy.
			</Blockquote>
		)
	},
}
