import { Box } from '@mando/styled-system/jsx'
import type { Meta, StoryObj } from '@storybook/react'

import { Highlight } from './Highlight'

const meta: Meta<typeof Highlight> = {
	component: Highlight,
	decorators: [
		(Story) => (
			<Box maxW={'600px'}>
				<Story />
			</Box>
		),
	],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (props) => {
		return (
			<Highlight
				query={['Ark UI', 'exclusive examples']}
				text='Unlock exclusive examples and support the development by getting Ark UI Plus.'
			/>
		)
	},
}
